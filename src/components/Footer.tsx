export default function Footer() {
  return (
    <footer className="border-t bg-gray-100 dark:bg-gray-800 py-4">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
