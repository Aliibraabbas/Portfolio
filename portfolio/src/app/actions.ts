'use server';

import db from '@/frameworks/db';
import type { ContactFormState } from '@/components/contact/ContactForm';

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  let errors: ContactFormState = {
    name: { value: name, errors: [] },
    email: { value: email, errors: [] },
    message: { value: message, errors: [] },
    isSubmitted: false, // Ajoute la clé isSubmitted dans l'état
  };

  // Validation
  if (name.length < 3) errors.name.errors?.push("Le nom doit contenir au moins 3 caractères.");
  if (!email.includes("@")) errors.email.errors?.push("L'email n'est pas valide.");
  if (message.length < 10) errors.message.errors?.push("Le message doit contenir au moins 10 caractères.");

  if (errors.name.errors?.length || errors.email.errors?.length || errors.message.errors?.length) {
    return errors;
  }

  try {
    await db.contact.create({
      data: { name, email, message },
    });

    console.log("✅ Données enregistrées dans la base !");

    // Mise à jour de l'état pour marquer la soumission comme réussie
    return {
      name: { value: '' },
      email: { value: '' },
      message: { value: '' },
      isSubmitted: true, // Le formulaire a été soumis avec succès
    };
  } catch (error) {
    console.error("❌ Erreur lors de l'insertion en base :", error);
    return prevState;
  }
}
