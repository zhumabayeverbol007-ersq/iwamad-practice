function ContactPage() {
  return (
    <main className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p>
        Email:{' '}
        <a href="mailto:y_zhumabayev@kbtu.kz" className="text-blue-600 underline">
          y_zhumabayev@kbtu.kz
        </a>
      </p>
      <p>
        GitHub:{' '}
        <a
          href="https://github.com/zhumabayeverbol007-ersq"
          target="_blank"
          rel="noopener"
          className="text-blue-600 underline"
        >
          zhumabayeverbol007-ersq
        </a>
      </p>
    </main>
  );
}

export default ContactPage;