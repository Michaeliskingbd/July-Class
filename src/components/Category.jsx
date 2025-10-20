import React from "react";
import Card from "../utils/Card";

const Category = () => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10 my-40 lg:mx-10 mx-0 z-50">
      <Card
        title="20% discount"
        subtitle="this is subtitle 1"
        text="SHOP NOW"
        backImg="https://images.unsplash.com/photo-1559559852-bb39e93bad84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY0fHxtYW4lMjBvdXRkb29yJTIwYW5kJTIwaW4lMjBzdW4lMjBnbGFzc2VzJTIwYW5kJTIwYnVlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        title="40% discount"
        subtitle="this is subtitlle 2"
        text="SHOP NOW"
        backImg="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlJTIwYmx1ZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      />
      <Card
        title="60% discount"
        subtitle="this is subtitlle 3"
        text="CHECK OUT"
        backImg="https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHBpbmslMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D"
      />
    </section>
  );
};

export default Category;
