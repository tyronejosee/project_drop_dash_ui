import { Button } from "../components/common/Button";

export function RestaurantDetailPage() {
  return (
    <div className="flex">
      <aside className="h-screen w-96 border-r dark:border-neutral-800 space-y-4 p-4">
        <figure className="w-full h-32 bg-neutral-800 rounded-xl"></figure>

        <div className="relative">
          <figure className="rounded-full h-16 w-16 dark:bg-neutral-700 -top-14 left-2 absolute border dark:border-neutral-800"></figure>
          <div className="space-y-1 pt-8">
            <h2 className="py-2 text-lg font-medium">Chilitalys Pizzas</h2>
            <span className="block text-xs">San Francisco 1117 - Santiago</span>
            <span className="block text-xs">Pizzas - Chilitalys Pizzas</span>
          </div>
        </div>
        <div className="border dark:border-neutral-800 rounded-lg p-2">
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

      <section className="p-4 w-full">
        <h3>ssssssssssssss</h3>
        <section className="grid grid-cols-3 gap-4 h-36">
          <article className="border dark:border-neutral-800 w-full rounded-lg flex overflow-hidden">
            <div className="p-2 w-2/3 space-y-2">
              <span className="text-md font-medium line-clamp-1">
                Nuevo Combo Big Chicken Mozzarella
              </span>
              <span className="block text-xs">
                1 Sándwich big mozzarella,1 papa mediana, 1 bebida en lata
              </span>
            </div>
            <figure className="w-1/3 h-full dark:bg-neutral-800"></figure>
          </article>
        </section>
      </section>

      <aside className="h-screen w-96 border-l dark:border-neutral-800 space-y-4 p-4">
        <section>
          <h2 className="py-2 text-lg font-medium pb-4 border-b dark:border-neutral-800">
            Tu pedido
          </h2>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <img className="h-10 w-10 rounded-full" src="" alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  author namme
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time>date</time>
                <span aria-hidden="true">&middot;</span>
                <span>rread time</span>
              </div>
            </div>
          </div>
          <header className="flex">
            <img
              src="#"
              alt=""
              className="w-10 h-10 rounded-full bg-neutral-800"
            />
            <div>
              <p>McDonals</p>
              <span className="block text-xs">12/03/2024, 20:20</span>
            </div>
          </header>
          <ul>
            <li className="flex justify-between">
              <span>Producto 1</span>
              <span className="text-md font-medium">$10.00</span>
            </li>
            <li className="flex justify-between">
              <span>Producto 2</span>
              <span className="text-md font-medium">$15.00</span>
            </li>
            <li className="flex justify-between">
              <span>Producto 3</span>
              <span className="text-md font-medium">$20.00</span>
            </li>
            <li className="flex justify-between border-t">
              <span className="py-2 text-md font-medium border-t dark:border-neutral-800">
                Total
              </span>
              <span className="py-2 text-md font-medium border-t dark:border-neutral-800">
                $45.00
              </span>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
