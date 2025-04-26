import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen.tsx";
import './index.css';

// Composant qui gère la redirection dynamique vers le blog
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

// Composant qui gère la redirection vers NanCV
function RedirectToNanCV() {
  // Redirection immédiate sans vérification de paramètre
  window.location.href = `https://nancy-cv.vercel.app`;
  return null; // Affiche l'écran de chargement pendant la redirection
}

// Composant qui gère la redirection vers Mood Music
function RedirectToMoodMusic() {
  // Redirection immédiate sans vérification de paramètre
  window.location.href = `https://mood-music.the-fox.tech`;
  return null; // Affiche l'écran de chargement pendant la redirection
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes de redirection */}
        <Route path="/blog/:id" element={<RedirectToExternalBlog />} />
        <Route path="/nancv" element={<RedirectToNanCV />} />
        <Route path="/mood-music" element={<RedirectToMoodMusic />} />
        
        {/* Route principale */}
        <Route path="/" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;