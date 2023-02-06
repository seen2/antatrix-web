import React from "react";

export default function MapView() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.481576862446!2d77.35416480891962!3d28.615325469662345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1675701785832!5m2!1sen!2sin"
        height="450"
        style={{ border: 0, borderRadius:20 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
