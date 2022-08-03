import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { filter, map, pipe, Subscription, take, takeLast } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator/generator.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css'],
})
export class RandomNumberComponent  implements OnDestroy{
  public arr: number[] = [];
private subscription: Subscription;

  constructor(private generatorService: GeneratorService) {}

  public start(): void {
    //     this.generatorService.generate(20).subscribe(
    // num=> this.arr.push(num),
    // err=>alert(err.message),
    // () => alert("Done")

    //     );

    // this.generatorService.generate(20).pipe(filter(n=>n %2===0)).subscribe(
    //     num=> this.arr.push(num),
    //     err=>alert(err.message),
    //     () => alert("Done")

    //         );

    // this.generatorService.generate(20).pipe(map((n) => n * n)).subscribe(
    //     (num) => this.arr.push(num),
    //     (err) => alert(err.message),
    //     () => alert('Done')
    //   );

    this.subscription = this.generatorService.generate(20).pipe(takeLast(5)).subscribe(
        (num) => this.arr.push(num),
        (err) => alert(err.message),
        () => alert('Done')
      );


    }
ngOnDestroy(): void {
    if(this.subscription){
        this.subscription.unsubscribe();
    }
}

  
}
