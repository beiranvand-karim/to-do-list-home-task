import {routes} from './app-routing.module';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {LogInComponent} from './log-in/log-in.component';



describe('routes', () => {


  it('should contain a route for /to-do-list', () => {

    expect(routes).toContain(  {
      path: 'to-do-list', component: ToDoListComponent
    });

  });


  it('should contain a route for /log-in', () => {

    expect(routes).toContain(  {
      path: 'log-in', component: LogInComponent
    });

  });


  it('should contain a route for /', () => {

    expect(routes).toContain(  {
      path: 'log-in', component: LogInComponent
    });

  });

});
