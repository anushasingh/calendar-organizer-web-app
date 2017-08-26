import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class ListdataService {


public eventslist=new EventEmitter<any>();

public day=new EventEmitter<any>();

public month=new EventEmitter<any>();

public year=new EventEmitter<any>();
public templist=new EventEmitter<any>();

public hlight=new EventEmitter<any>();

  constructor() { }


getdatestring()
{

}



}
