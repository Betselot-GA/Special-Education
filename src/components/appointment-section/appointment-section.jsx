import React from 'react'
import Scheduler from '../scheduler/scheduler';
function AppointmentSection() {
    return (
      <>
        <section class="appoinment section">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="mt-3">
                  <div class="feature-icon mb-3">
                    <i class="icofont-support text-lg"></i>
                  </div>
                  <span class="h3">Call for an Emergency Service!</span>
                  <h2 class="text-color mt-3">+251985767959 </h2>
                  <h2 class="text-color mt-3">+251917387771 </h2>
                </div>
              </div>

              <div class="col-lg-8">
                <Scheduler />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default AppointmentSection;