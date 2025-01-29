'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions';
import '../../app/styles/contactForm.css';

export type ContactFormState = {
  name: { value: string; errors?: string[] };
  email: { value: string; errors?: string[] };
  message: { value: string; errors?: string[] };
  isSubmitted: boolean; // Ajout d'un champ pour vérifier si le formulaire est soumis
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    { name: { value: '' }, email: { value: '' }, message: { value: '' }, isSubmitted: false }
  );

  // Vérifie si le formulaire a été soumis avec succès
  const isSuccess =
    state.isSubmitted && !state.name.errors?.length && !state.email.errors?.length && !state.message.errors?.length && !isPending;

  return (
    <div className="contact-form">
      <h1>Contactez-moi</h1>

      <form action={formAction} className="contact-form__form">
        {/* Champ Nom */}
        <div>
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={state.name.value}
            required
          />
          {state.name.errors?.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={state.email.value}
            required
          />
          {state.email.errors?.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>

        {/* Champ Message */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            defaultValue={state.message.value}
            rows={4}
            required
          />
          {state.message.errors?.map((error, index) => (
            <p key={index} className="error">{error}</p>
          ))}
        </div>

        {/* Bouton d'envoi */}
        <button type="submit" disabled={isPending}>
          {isPending ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>

      {/* Affichage du message de succès uniquement après soumission réussie */}
      {isSuccess && !isPending && (
        <p className="success">✅ Formulaire envoyé avec succès !</p>
      )}
    </div>
  );
}
