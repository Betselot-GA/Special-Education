import React from 'react';
import Scheduler from '../scheduler/scheduler';

function BookAppointment() {
    return (
      <>
        <section class="section appoinment">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 ">
                <div class="appoinment-content">
                  <img
                    src="images/bg/slider-bg-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <div class="emergency">
                    <h2 class="text-lg">
                      <i class="icofont-phone-circle text-lg"></i>+251 985 76 79
                      59
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-10 ">
                <Scheduler />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default BookAppointment;