import React from 'react';
import "./cta.css"
function ServicesCTA() {
    return (
      <>
        <section class="section cta-page">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="cta-content">
                  <div class="divider mb-4"></div>
                  <h2 class="mb-5 text-lg">
                    We are pleased to offer you the{" "}
                    <span class="title-color">chance to have healthy child</span>
                  </h2>
                  <a
                    href="/appointment"
                    class="btn btn-main-2 btn-round-full"
                  >
                    Get appoinment<i class="icofont-simple-right  ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ServicesCTA;