export default function Earth() {
  return (
    <section className="main-wrapper">
      <div className="buttons-container">
        <button className="active">
          <span>01</span> Overview
        </button>
        <button>
          <span>02</span> Structure
        </button>
        <button>
          <span>03</span> Surface
        </button>
      </div>
      <div className="image-container">
        <img src="/mercury/planet-mercury.svg" alt="" />
      </div>
      <div className="text-container">
        <h1 className="uppercase">Mercury</h1>
        <p className="info">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <p className="source">
          <span>Source :</span>{" "}
          <a
            href="https://en.wikipedia.org/wiki/Mercury_(planet)"
            target="_blank"
          >
            Wikipedia
          </a>
          <img src="/icon-source.svg" alt="" />
        </p>
      </div>
    </section>
  );
}
