import { Component } from '@angular/core';
@Component({
selector: 'app-feedback-form',
templateUrl: './feedbackform.html', // Updated to match the new file name
styleUrls: ['./feedbackform.css'] // Updated to match the new file name
})
export class FeedbackFormComponent {
submitted = false;
onSubmit() {
this.submitted = true;
// You can handle the form data here (e.g., send it to a server)
// console.log({ name, email, message });
}
}