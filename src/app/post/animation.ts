import { trigger, state, style, transition, animate } from '@angular/animations';

export let fade = trigger('fade',[
  state('void', style({opacity:0, transform: 'translateY(-3rem)'})),
  state('*', style({opacity:1, transform: 'translateY(0rem)'})),
  transition(':enter,:leave', [
    animate(500)
  ]),
])

export let Item = trigger('Item',[
  state('void', style({opacity:0, transform: 'translateX(-30rem)'})),
  transition(':enter,:leave', [
    animate(500)
  ]),
])
