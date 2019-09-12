import {
  trigger,
  transition,
  style,
  query,
  animate,
  stagger
} from "@angular/animations";

export const fadeIn = trigger("listAnimation", [
  transition("* => *", [
    // each time the binding value changes
    query(":leave", [stagger(100, [animate("0.5s", style({ opacity: 0 }))])], {
      optional: true
    }),
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger(100, [animate("0.5s", style({ opacity: 1 }))])
      ],
      { optional: true }
    )
  ])
]);
