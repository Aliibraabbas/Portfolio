"use client";

import { useState } from "react";
import "../../app/styles/contactForm.css"; 

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Une erreur s'est produite, réessayez.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Une erreur s'est produite, réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      {/* <h1>Contactez-moi</h1> */}

      <form onSubmit={handleSubmit} className="contact-form__form">
        <div>
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>

      {responseMessage && (
        <p className={responseMessage.includes("succès") ? "success" : "error"}>
          {responseMessage}
        </p>
      )}
    </div>
  );
}
