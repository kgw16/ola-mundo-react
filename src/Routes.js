import PaginaPadrao from "Componentes/PaginaPadrao";
import Rodape from "Componentes/rodape";
import ScrollToTop from "Componentes/ScrollToTop";
import NaoEncontrada from "Paginas/NaoEncontrada";
import Post from "Paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMin />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
