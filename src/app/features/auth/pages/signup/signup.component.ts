import {Component, signal} from '@angular/core';
import {
  ArrowLeft,
  ArrowRight, BadgeCheck,
  Calendar,
  CalendarDays,
  Check, Contact, Contact2, Eye, Key,
  LucideAngularModule,
  User
} from 'lucide-angular';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    LucideAngularModule,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './signup.component.html',
  styles: ``
})
export class SignupComponent {
  currentStep = signal(0);
  steps = [
    {label: 'Personal information', id: 0},
    {label: 'Contact information', id: 1},
    {label: 'Security information', id: 2},
  ];
  protected readonly Check = Check;
  protected readonly Calendar = Calendar;
  protected readonly CalendarDays = CalendarDays;
  protected readonly User = User;
  protected readonly ArrowLeft = ArrowLeft;
  protected readonly ArrowRight = ArrowRight;
  protected readonly Contact = Contact;
  protected readonly Contact2 = Contact2;
  protected readonly Key = Key;
  protected readonly Eye = Eye;
  protected readonly BadgeCheck = BadgeCheck;
}
