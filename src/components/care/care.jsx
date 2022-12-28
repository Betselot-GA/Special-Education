import React from 'react'

function Care() {
    return (
      <>
        <section class="section about">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-sm-6">
                <div class="about-img">
                  <img
                    src="https://th.bing.com/th/id/R.0926eafbd6ff24ceecaa4bc704dd256d?rik=Tqk0KbfBwdZMiQ&pid=ImgRaw&r=0"
                    alt=""
                    class="img-fluid"
                  />
                  <img
                    src="https://th.bing.com/th/id/OIP.Z9YLl_u6PR-OS79rWi0PbwHaEI?pid=ImgDet&rs=1"
                    alt=""
                    class="img-fluid mt-4"
                  />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="about-img mt-4 mt-lg-0">
                  <img
                    src="https://images.pexels.com/photos/8709218/pexels-photo-8709218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="about-content pl-4 mt-4 mt-lg-0">
                  <h2 class="title-color">
                    Special <br />
                    Education
                  </h2>
                  <p class="mt-4 mb-5">
                    Special education means specially designed instruction which
                    meet the unique needs of exceptional children (children with
                    disabilities, gifted & talented children & children with
                    behavioral& learning problems)
                  </p>

                  <a
                    href="/services"
                    class="btn btn-main-2 btn-round-full btn-icon"
                  >
                    Services<i class="icofont-simple-right ml-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Care;