import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import emailjs, { init } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const email = this.contactForm.get('email')?.value;
      const message = this.contactForm.get('message')?.value;
      this.contactForm.reset()
      console.log('Email:', email);
      console.log('Message:', message);
      init('8GPT8rybkTmN3a_4C');
    const templateParams = {
      email: email,
      message: message,
    };
    emailjs.send('service_kxkxrly', 'template_l1dz1n4', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        window.postMessage('Form submitted and email sent successfully!');
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Form submitted, but there was an error sending the email.');
      });
      emailjs.send('service_kxkxrly', 'template_is2t31j', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        window.alert('Form submitted and email sent successfully!');
      }, (error) => {
        console.error('Failed to send email:', error);
        alert('Form submitted, but there was an error sending the email.');
      });
    }
  }
}
