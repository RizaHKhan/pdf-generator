<template>
  <button @click="generatePDF">Generate PDF</button>
  <Vue3Html2pdf
    ref="html2Pdf"
    :show-layout="true"
    :float-layout="false"
    :enable-download="false"
    :preview-modal="true"
    filename="filenamegoeshere"
    :pdf-quality="2"
    :manual-pagination="true"
    pdf-format="a4"
    :pdf-margin="10"
    pdf-orientation="portrait"
    pdf-content-width="800px"
  >
    <template v-slot:pdf-content>
      <div class="page html2pdf__page-break">
        <header class="header">
          <div class="container top">
            <div class="row">
              <div class="logo col-12 col-sm-6">
                <img src="./assets/images/logo.png" alt="" />
              </div>
              <div class="content col-12 col-sm-6">
                <h1>Main Titile</h1>
                <p class="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p class="date text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="#3399ff"
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                    />
                  </svg>
                  Jul 28, 2020 at 11:00
                </p>
              </div>
            </div>
          </div>
          <div class="container cover pt-0">
            <figure class="figure text-center mb-0">
              <img
                src="./assets/images/coverpage.png"
                alt=""
                style="object-fit: contain; height: 100%"
              />
            </figure>
          </div>
        </header>
      </div>
      <div class="page html2pdf__page-break">
        <div class="sec sec-contact">
          <div class="container">
            <h2>Contact Details</h2>
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">Contact Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">API</td>
                  <td>API</td>
                  <td>API</td>
                  <td>API</td>
                </tr>
                <tr>
                  <td scope="row">API</td>
                  <td>API</td>
                  <td>API</td>
                  <td>API</td>
                </tr>
                <tr>
                  <td scope="row">API</td>
                  <td>API</td>
                  <td>API</td>
                  <td>API</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="page html2pdf__page-break">
        <div class="sec sec-list-contents">
          <div class="container">
            <h2 class="text-center">
              <span class="text">Table of Contents</span>
            </h2>
            <div class="list-contents bg-light mt-4">
              <ul class="list-unstyled">
                <li>
                  <a href="#scope"
                    ><span class="title">Scope</span> <i class="num">4</i></a
                  >
                </li>
                <li>
                  <a href="#overview"
                    ><span class="title">Findings Overview</span>
                    <i class="num">4</i></a
                  >
                </li>
                <li>
                  <a href="#findings"
                    ><span class="title">Findings:</span>
                    <i class="num">5</i></a
                  >
                  <ul class="list-unstyled">
                    <li>
                      <a href="#api-1"
                        ><span class="title">API</span> <i class="num">5</i></a
                      >
                    </li>
                    <li>
                      <a href="#api-2"
                        ><span class="title">API</span> <i class="num">6</i></a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="page html2pdf__page-break">
        <div class="sec sec-matrix">
          <div class="container">
            <h2>Scoring matrix:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="bg-danger cell-indication p-0">
                    <div class="bg-danger indication"><br /></div>
                  </td>
                  <td class="text-danger align-middle text-uppercase">High</td>
                  <td>Direct threat to key business processes.</td>
                </tr>
                <tr>
                  <td class="bg-warning cell-indication p-0">
                    <div class="bg-warning indication"><br /></div>
                  </td>
                  <td class="text-warning align-middle text-uppercase">
                    Medium
                  </td>
                  <td>
                    Indirect threat to key business processes or partial threat
                    to business processes.
                  </td>
                </tr>
                <tr>
                  <td class="bg-success cell-indication p-0">
                    <div class="bg-success indication"><br /></div>
                  </td>
                  <td class="text-success align-middle text-uppercase">Low</td>
                  <td>
                    No direct threat exists. Vulnerability may be exploited
                    using other vulnerabilities.
                  </td>
                </tr>
                <tr>
                  <td class="bg-info cell-indication p-0">
                    <div class="bg-info indication"><br /></div>
                  </td>
                  <td class="text-info align-middle text-uppercase">
                    Informational
                  </td>
                  <td>
                    This finding does not indicate vulnerability, but states a
                    comment that notifies about design flaws and improper
                    implementation that might cause a problem in the long run.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 id="scope" class="pt-5">Scope</h2>
            <p>
              The objective of this report is to perform penetration test on the
              following assets:
            </p>
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="page html2pdf__page-break">
        <div class="sec sec-overview" id="overview">
          <div class="container">
            <h2>Findings Overview</h2>
            <p>
              The objective of producing this report was to outline the
              vulnerabilities detected during the penetration testing process
            </p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="text-center" width="200">
                    Observation ID
                  </th>
                  <th scope="col">Observation Name</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center" scope="row">1</td>
                  <td>API</td>
                  <td class="bg-danger px-3 cell-indication p-0">
                    <div class="bg-danger indication text-white">HIGH</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">2</td>
                  <td>API</td>
                  <td class="bg-danger px-3 cell-indication p-0">
                    <div class="bg-danger indication text-white">HIGH</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">3</td>
                  <td>API</td>
                  <td class="bg-danger px-3 cell-indication p-0">
                    <div class="bg-danger indication text-white">HIGH</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">4</td>
                  <td>API</td>
                  <td class="bg-danger px-3 cell-indication p-0">
                    <div class="bg-danger indication text-white">HIGH</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">5</td>
                  <td>API</td>
                  <td class="bg-warning px-3 cell-indication p-0">
                    <div class="bg-warning indication text-white">MEDIUM</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">6</td>
                  <td>API</td>
                  <td class="bg-success px-3 cell-indication p-0">
                    <div class="bg-success indication text-white">LOW</div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" scope="row">6</td>
                  <td>API</td>
                  <td class="bg-info px-3 cell-indication p-0">
                    <div class="bg-info indication text-white">
                      INFORMATIONAL
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="page html2pdf__page-break">
        <div class="sec sec-summary">
          <div class="container">
            <h2>Executive Summary:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class="chart-container mb-5 px-1">
              <canvas id="barchart" width="600" height="250"></canvas>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="chart-container mb-5 px-5 mx-lg-4 pt-md-4 mt-md-2">
                  <canvas id="piechart" width="855" height="570"></canvas>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div id="top-canvas"></div>
              </div>
              <div class="col-12 col-md-6 mx-auto d-none">
                <div class="chart-container px-5">
                  <canvas id="doughnutchart" width="855" height="570"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page html2pdf__page-break">
        <div class="sec sec-findings" id="findings">
          <div class="container">
            <h2>Findings:</h2>
            <p id="api-1" class="bg-danger text-white p-2 text-center mb-1">
              TITLE
            </p>
            <p class="bg-danger text-white p-2 text-center mb-0 mb-0">HIGH</p>
            <table class="table table-bordered text-center mt-0">
              <tbody>
                <tr>
                  <th class="head" scope="row">Authentication</th>
                  <th class="head">Likelihood</th>
                  <th class="head">Impact</th>
                  <th class="head">cvss</th>
                </tr>
                <tr>
                  <td scope="row">Not Needed</td>
                  <td>API</td>
                  <td>API</td>
                  <td></td>
                </tr>
                <tr>
                  <th class="head" colspan="2">Associated CV</th>
                  <th class="head" colspan="2">Affected Systems</th>
                </tr>
                <tr>
                  <td colspan="2"><br /></td>
                  <td colspan="2"><br /></td>
                </tr>

                <tr>
                  <th class="head" colspan="2">Vulnerability St atus</th>
                  <th class="head" colspan="2">Responsi ble team</th>
                </tr>
                <tr>
                  <td colspan="2">OPEN</td>
                  <td colspan="2"><br /></td>
                </tr>
              </tbody>
            </table>
            <h3>Technical Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3>Affected targets:</h3>
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
              </tbody>
            </table>

            <h3>Recommendation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div class="page html2pdf__page-break">
        <div class="sec sec-findings" id="api-2">
          <div class="container">
            <p class="bg-warning text-white p-2 text-center mb-1">TITLE</p>
            <p class="bg-warning text-white p-2 text-center mb-0">MEDIUM</p>
            <table class="table table-bordered text-center mt-0">
              <tbody>
                <tr>
                  <th class="head" scope="row">Authentication</th>
                  <th class="head">Likelihood</th>
                  <th class="head">Impact</th>
                  <th class="head">cvss</th>
                </tr>
                <tr>
                  <td scope="row">Not Needed</td>
                  <td>API</td>
                  <td>API</td>
                  <td></td>
                </tr>
                <tr>
                  <th class="head" colspan="2">Associated CV</th>
                  <th class="head" colspan="2">Affected Systems</th>
                </tr>
                <tr>
                  <td colspan="2"><br /></td>
                  <td colspan="2"><br /></td>
                </tr>

                <tr>
                  <th class="head" colspan="2">Vulnerability St atus</th>
                  <th class="head" colspan="2">Responsi ble team</th>
                </tr>
                <tr>
                  <td colspan="2">OPEN</td>
                  <td colspan="2"><br /></td>
                </tr>
              </tbody>
            </table>
            <h3>Technical Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3>Affected targets:</h3>
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
                <tr>
                  <td scope="row"><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                  <td><br /></td>
                </tr>
              </tbody>
            </table>

            <h3>Recommendation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </template>
  </Vue3Html2pdf>
</template>

<script setup>
import { ref } from "vue";
import Vue3Html2pdf from "vue3-html2pdf";

const html2Pdf = ref(null);

const generatePDF = () => {
  console.log(html2Pdf.value);
  html2Pdf.value.generatePdf();
};
</script>

<style lang="scss">
.page {
  margin-bottom: 0px !important;
}
</style>
