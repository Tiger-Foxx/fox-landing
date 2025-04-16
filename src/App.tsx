import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen.tsx";
import './index.css';

// Composant qui gère la redirection dynamique
function RedirectToExternalBlog() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  // Vérifie si l'ID est un nombre avant de rediriger
  if (!id || isNaN(Number(id))) {
    return <Navigate to="/" replace />; // Redirige vers l'accueil si l'ID n'est pas valide
  }

  // Redirection immédiate
  window.location.href = `https://theoldfox.pythonanywhere.com/post/${id}`;
  return null; // Évite d'afficher quoi que ce soit
}
function RedirectToNanCV() {
  const { link } = useParams(); // Récupère l'ID depuis l'URL

  // Vérifie si l'ID est un nombre avant de rediriger
  if (!link || isNaN(Number(link))) {
    return <Navigate to="/" replace />; // Redirige vers l'accueil si l'ID n'est pas valide
  }

  // Redirection immédiate
  window.location.href = `https://nancy-cv.vercel.app`;
  return null; // Évite d'afficher quoi que ce soit
}
//https://nancy-cv.vercel.app/

function App() {
  return (
    <Router>
      <Routes>
        {/* Route de redirection */}
        <Route path="/blog/:id" element={<RedirectToExternalBlog />} />
        <Route path="/nancv/:link" element={<RedirectToNanCV />} />
        
        {/* Route principale */}
        <Route path="/" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
