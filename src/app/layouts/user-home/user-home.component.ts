import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.scrollToFragment();
    });
  }
  
  scrollToFragment(): void {
    const currentUrlTree = this.router.parseUrl(this.router.url);
    const currentUrlFragment = currentUrlTree.fragment;

    if (currentUrlFragment) {
      this.scrollTo(currentUrlFragment);
    }
  }

  scrollTo(fragment: string): void {
    try {
      const element = this.el.nativeElement.querySelector(`#${fragment}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      console.error('Error scrolling to fragment:', e);
    }
  }

  GoToLoginAdmin() {
    this.router.navigate(['/admin/login']);
  }

  GoToLoginEns() {
    this.router.navigate(['/loginens']);
  }



  GoToLoginEtud() {
    this.router.navigate(['/loginetud']);
  }


}
