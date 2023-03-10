import React from "react";

function About() {
  return (
    <div>
      <section class="global-page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block">
                <h2>About Company</h2>
                <ol class="breadcrumb list-inline text-center">
                  <li class="list-inline-item">
                    <a href="index.html">
                      <i class="ion-ios-home"></i>
                      Home &nbsp; &nbsp;/
                    </a>
                  </li>
                  <li class="active list-inline-item">About</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="company-description">
        <div class="container">
          <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
              <img
                src="images/about/about-company.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-md-6">
              <div class="block">
                <h3
                  class="subtitle wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="500ms"
                >
                  Why We are Different
                </h3>
                <p
                  class="wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration="500ms"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequun. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p
                  class="wow fadeInUp"
                  data-wow-delay=".7s"
                  data-wow-duration="500ms"
                >
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-feature clearfix">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 px-0">
              <div
                class="block about-feature-1 wow fadeInDown"
                data-wow-duration="500ms"
                data-wow-delay=".3s"
              >
                <h2>Why Choose Us</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas.
                </p>
              </div>
            </div>
            <div class="col-lg-4 px-0">
              <div
                class="block about-feature-2 wow fadeInDown"
                data-wow-duration="500ms"
                data-wow-delay=".5s"
              >
                <h2 class="item_title">What You Get</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas.
                </p>
              </div>
            </div>
            <div class="col-lg-4 px-0">
              <div
                class="block about-feature-3 wow fadeInDown"
                data-wow-duration="500ms"
                data-wow-delay=".7s"
              >
                <h2 class="item_title">Meet The Energy</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
