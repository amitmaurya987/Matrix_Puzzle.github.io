var table_=document.getElementById('table');
var _click;


       table_.addEventListener('click',abc);
       
       function abc(elm){
           var _target=elm.target;
           var _currentTarget=elm.currentTarget;
           var _activeClass='active';

           //find the position of target
           var table_row = _target.parentElement.rowIndex;
           var table_column = _target.cellIndex;
          
       
         //check row and column odd or even
           var row = table_row % 2;
           var column = table_column % 2;
       
           var a = (row == 0) && (column == 0);
           var b = (row == 1) && (column == 1);
           var c = (row == 1) && (column == 0);
           var d = (row == 0) && (column == 1);
         //if row and column even or row and column odd and check which cell first click 
           if((a || b) && _click != 1){
               _target.classList.toggle(_activeClass); 
               _click = 2; 
           }
           //if row odd and column even or row even and column odd and check which cell first click 
           if((c || d) && _click !=2 ){
              
               _target.classList.toggle(_activeClass);               
               _click = 1;
           }     
       }