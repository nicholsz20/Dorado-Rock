import { Armangac_bourbon_cognac_whiskey } from "../utils/Armangac_bourbon_cognac_whiskey";
import { Cachaca_mezcal_pisco_sotol_tequila } from "../utils/Cachaca_mezcal_pisco_sotol_tequila";
import { Cordials_Gin_Rum_Vodka } from "../utils/Cordials_Gin_Rum_Vodka";
import ProductList from "../components/ProductList";
import { RTD } from "../utils/RTD";
import { useEffect } from "react";

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <div className="product-page-container">
        <div className="product-header">
          <div className="product-header-text">
            <h1>SPIRITS</h1>
          </div>
        </div>
        <ProductList
          products={Cachaca_mezcal_pisco_sotol_tequila}
          title="CACHACA, MEZCAL, PISCO, SOTOL, & TEQUILA"
        />
        <ProductList
          products={Armangac_bourbon_cognac_whiskey}
          title="ARMANGAC, BOURBON, COGNAC, & WHISK(E)Y"
        />
        <ProductList
          products={Cordials_Gin_Rum_Vodka}
          title="CORDIALS, GIN, RUM, & VODKA"
        />
        <ProductList products={RTD} title="READY TO DRINK (RTD)" />
      </div>
    </div>
  );
}
