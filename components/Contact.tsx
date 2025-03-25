
import React from "react";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          ¿Lista para empezar tu transformación?
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Cuéntame un poco de ti y agendemos una llamada gratuita para conocernos.
        </p>
        <form className="grid gap-6 text-left" name="contacto" method="POST">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Cuéntame brevemente qué estás buscando"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
