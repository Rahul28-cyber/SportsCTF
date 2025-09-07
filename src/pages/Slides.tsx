// app/slide/page.tsx  (Next.js)
// or: pages/slide.tsx


export default function Slides() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#fff",
        color: "#111",
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <section style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "3rem", lineHeight: 1.1 }}>
          Shoes CTF – Slide
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
          Flag:
          <strong style={{ marginLeft: 8 }}>
            SpectreCTF&#123;My_n4m3_1s_D45_B7w3H4kN&#125;
          </strong>
        </p>
      </section>
    </main>
  );
}
