import { Footer } from "../components/common/Footer";
import { RestaurantCard } from "../components/common/RestaurantCard";
import { RestaurantIcon } from "../components/common/RestaurantIcon";

export function HomePage() {
  return (
    <div className="p-4">
      <section>
        <figure className="w-full h-96 dark:bg-neutral-800 rounded-xl"></figure>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Categorías</h2>
        <div className="grid grid-cols-12 gap-4">
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
          <RestaurantIcon />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Top Restaurants Cerca Tuyo</h2>
        <span>
          Buscar los restaurantes más populares de tu zona y haz tu pedido de
          comida a domiciio online.
        </span>
        <div className="grid grid-cols-5 gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ofertas del día</h2>
        <span>Aprovecha las mejores ofertas del día.</span>
        <div className="grid grid-cols-5 gap-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <figure className="w-full h-96 dark:bg-neutral-800 rounded-xl"></figure>
        <div className="w-full h-96 dark:bg-neutral-800 rounded-xl"></div>
      </section>
      <Footer />
    </div>
  );
}
