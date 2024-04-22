import { Button } from "../components/common/Button";

export function RestaurantDetailPage() {
  return (
    <>
      <div className="flex">
        <aside className="h-screen w-72 border-r border-neutral-300 space-y-4 p-4">
          <figure className="w-full h-32 bg-gray-300"></figure>

          <div className="relative">
            <figure className="rounded-full h-16 w-16 bg-white -top-10 absolute border border-gray-500"></figure>
            <div className="space-y-1 pt-8">
              <h2 className="py-2 text-lg font-medium">Chilitalys Pizzas</h2>
              <span className="block text-xs">
                San Francisco 1117 - Santiago
              </span>
              <span className="block text-xs">Pizzas - Chilitalys Pizzas</span>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-2">
            <p className="flex justify-between">
              <span>Delivery</span>
              <span className="font-medium">44 min</span>
            </p>
            <p className="flex justify-between">
              <span>Envío</span>
              <span className="font-medium">$ 1.500</span>
            </p>
            <p className="flex justify-between">
              <span>Calificación</span>
              <span className="font-medium">4.5</span>
            </p>
          </div>
          <div>
            <p>Estado: Abierto</p>
            <p>Horario de atención: 00:00:00 - 02:00:00</p>
          </div>
          <div className="space-x-2">
            <Button variant="primary">Llamar</Button>
            <Button variant="secondary">Reportar</Button>
          </div>
        </aside>

        <section className="p-4">
          <h3>skjbnsknskj</h3>
        </section>
      </div>
    </>
  );
}
