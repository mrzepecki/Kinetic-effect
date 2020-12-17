import _ from "lodash";
import "reset-css";
import "./styles/style.scss";
import { gsap } from "gsap";
import $ from "jquery";


$(".effect-kinetic").each(function (index) {
  for (let i = 1; i < 12; i++) {
    var cloned = $(this).find(">:first-child").clone();
    $(this).append(cloned);
  }
  $(this).on("click", function () {
    var tl = gsap.timeline();
    tl.staggerTo(".effect-kinetic__item", 0.4, { rotation: "-3" }, 0.03, 0.7);
    tl.staggerTo(".effect-kinetic__item", 0.5, { rotation: 3 }, 0.03, 1.1);
    tl.staggerTo(".effect-kinetic__item", 0.5, { rotation: 0 }, 0.03, 1.6);
  });
});
