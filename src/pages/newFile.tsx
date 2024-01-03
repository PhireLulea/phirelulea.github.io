import Layout from "../layouts/Layout.astro";

<Fragment>
  <Layout>
    <div class="bg-gray-600 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        id="animation-carousel"
        class="relative w-full row-start-2 md:row-start-auto"
        {...{ "data-carousel": "slide" }}
      >
        {/** Carousel wrapper */}
        <div class="relative h-screen overflow-hidden md:rounded-lg md:h-[32rem]">
          {/** Item 1 */}
          <div class="hidden duration-700 ease-in-out" {...{ "data-carousel-item": true }}>
            <img
              src="https://picsum.photos/200/300"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/** Item 2 */}
          <div class="hidden duration-700 ease-in-out" {...{ "data-carousel-item": true }}>
            <img
              src="https://picsum.photos/200/300.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/** Item 3 */}
          <div class="hidden duration-700 ease-in-out" {...{ "data-carousel-item": "active" }}>
            <img
              src="https://picsum.photos/200/600"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/** Item 4 */}
          <div class="hidden duration-700 ease-in-out" {...{ "data-carousel-item": true }}>
            <img
              src="https://picsum.photos/200/700"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/** Item 5 */}
          <div class="hidden duration-700 ease-in-out" {...{ "data-carousel-item": true }}>
            <img
              src="https://picsum.photos/200/400"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        {/** Slider indicators */}
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            {...{ "aria-current": "true", "aria-label": "Slide 1", "data-carousel-slide-to": "0" }}
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            {...{ "aria-current": "false", "aria-label": "Slide 2", "data-carousel-slide-to": "1" }}
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            {...{ "aria-current": "false", "aria-label": "Slide 3", "data-carousel-slide-to": "2" }}
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            {...{ "aria-current": "false", "aria-label": "Slide 4", "data-carousel-slide-to": "3" }}
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            {...{ "aria-current": "false", "aria-label": "Slide 5", "data-carousel-slide-to": "4" }}
          ></button>
        </div>
      </div>
      <div class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sapiente doloremque quod magnam recusandae
        voluptatum aliquam? Quibusdam exercitationem totam reprehenderit eius unde magni odit. Pariatur iure
        exercitationem impedit temporibus nulla.
      </div>
    </div>
    <div class="min-h-screen bg-gray-800 text-white">
      <h1>Eventemang</h1>
    </div>
    <div class="min-h-screen bg-gray-800 text-white">
      <h1>Lära sig</h1>
    </div>
  </Layout>
</Fragment>;
