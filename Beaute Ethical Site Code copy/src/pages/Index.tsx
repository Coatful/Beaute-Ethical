
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * This component automatically redirects to the HTML-based site
 * Image labels have been added in the HTML files to help with styling
 * 
 * Key image labels:
 * - hero-background: Main background for the hero section
 * - about-section-background: Background for the about section
 * - brand-philosophy-background: Background for brand philosophy section
 * - ronas-brand-image, merikit-brand-image, orjade-brand-image, bethique-brand-image: Brand tiles
 * - product-specific images are labeled individually in each file
 */
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the HTML index page
    window.location.href = "/index.html";
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
        <p className="text-xl text-gray-600">Please wait while we redirect you to Beaute Ethical website.</p>
        <a href="/index.html" className="mt-4 inline-block text-blue-500 hover:text-blue-600">
          Click here if you are not redirected automatically
        </a>
      </div>
    </div>
  );
};

export default Index;
