import '../style.css';

export default function ClienteView() {
  return (
    <div className="cliente-container">
      <h1 className="titulo-loja">Bem-vindo ao <span className="nike-destaque">NikeShoes</span>! Confira alguns dos nossos produtos abaixo:</h1>
      
      <div className="galeria-produtos">
        <img src="/banner-vomero-18-17-04-25-desk.avif" alt="Nike Vomero 18" />
        <img src="/banner-A-air-max-dn-17-04-25.webp" alt="Nike Air Max DN" />
        <img src="/banner-B-fast-pack-v2.avif" alt="Fast Pack" />
        <img src="/big-3-air-force-1-desk-v3.jpg" alt="Air Force 1" />
        <img src="/big-3-air-jordan-1-desk-v3.jpg" alt="Air Jordan 1" />
        <img src="/big-3-airmax-desk-v3.avif" alt="Air Max" />
        <img src="/big-3-dunk-desk-v3.avif" alt="Nike Dunk" />
      </div>
    </div>
  );
}
