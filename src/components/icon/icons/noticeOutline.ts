import * as React from "react";

function NoticeOutline(props: any) {
  return React.createElement("svg", Object.assign({
        width: "1em",
        height: "1em",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink"
      },
      props, {
        style: Object.assign({
          verticalAlign: '-0.125em'
        }, props.style),
        className: ['agile-mobile-icon', props.className].filter(Boolean).join(' ')
      }),
    React.createElement("path", {
      d: "M678.79891 285.817608c-7.872295-6.816243-19.685341-5.796006-26.340925 2.307555-6.655584 8.126075-5.656837 20.253276 2.243087 27.100218 56.351426 48.862871 88.678692 120.314203 88.678692 196.068538 0 73.013921-30.40959 142.798287-83.444481 191.407378-7.701402 7.075139-8.374738 19.227923-1.51961 27.14729 3.689019 4.28356 8.822946 6.435573 13.980409 6.435573 4.41045 0 8.845459-1.612731 12.43624-4.869914 60.992119-55.917544 95.954399-136.156006 95.954399-220.120326C780.763187 424.178839 743.603869 342.015537 678.79891 285.817608zM783.507694 197.676152c-8.876158-5.353938-20.338211-2.330068-25.601074 6.822382-5.234211 9.152451-2.267647 20.918425 6.633071 26.327622 96.229668 58.272171 156.020426 165.745928 156.020426 280.46674 0 114.136503-59.289338 221.299175-154.750503 279.698237-8.872065 5.436826-11.790534 17.22736-6.503111 26.356274 3.488451 6.049786 9.720386 9.4093 16.07614 9.4093 3.260254 0 6.551206-0.870834 9.5454-2.691295C891.674229 758.76722 957.972191 638.913505 957.972191 511.321548 957.947632 383.007137 891.099131 262.850523 783.507694 197.676152zM280.84434 656.81113l1.343601 0.280386c5.010107-0.670266 10.272971 0.588401 14.432711 4.205788L513.75497 849.294003 513.75497 173.295881 296.644187 361.218902c-0.670266 0.586354-1.494027 0.791016-2.214435 1.254573-1.099031 0.743944-2.169409 1.457188-3.442402 1.949398-1.294482 0.488117-2.589988 0.639566-3.935636 0.819668-0.785899 0.121773-1.503237 0.479931-2.420119 0.514723L103.411231 365.757265l0 291.054889L280.84434 656.812153zM277.828656 327.296301l242.606457-210.013131c5.556553-4.795213 13.33368-5.849218 19.913539-2.717901 6.579859 3.151783 10.790764 9.969049 10.790764 17.430998l0 758.596328c0 7.461949-4.210905 14.278191-10.813277 17.433044-2.520403 1.201361-5.211698 1.793856-7.877411 1.793856-4.311189 0-8.600889-1.541099-12.037151-4.51278l-242.605434-210.013131L84.718497 695.293583C74.347289 695.234231 66.027809 686.641529 66.027809 676.061566L66.027809 346.524225c0-10.57587 8.319479-19.169595 18.690688-19.227923L277.828656 327.296301z",
      id: "NoticeOutline-1",
      fill: "currentColor",
      fillRule: "nonzero"
    })
  );
}

export default NoticeOutline;
