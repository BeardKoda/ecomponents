import { css } from "@emotion/react";

export const gridStyle = css`
  .row {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .row-cols-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }
    .row-cols-sm-auto > * {
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-sm-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-sm-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-sm-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }
    .row-cols-sm-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-sm-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-sm-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }
    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }
    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }
    .row-cols-lg-auto > * {
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-lg-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-lg-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-lg-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }
    .row-cols-lg-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-lg-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-lg-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }
    .row-cols-xl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-xl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-xl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-xl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }
    .row-cols-xl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-xl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-xl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }
    .row-cols-xxl-auto > * {
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-xxl-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-xxl-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-xxl-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }
    .row-cols-xxl-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-xxl-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-xxl-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }
    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
`;
