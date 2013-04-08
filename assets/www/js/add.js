
var json ={};
function initJson(){
	json.header={};
	json.one=([]);
	json.two={};
	json.three={};
	json.four={};
	json.five={};
	json.six={};
	json.seven={};
	json.eight={};
	json.nine={};
	json.ten={};
}
$('document').ready(function(e) {
		
		initJson();

		var sevenCounter = 1, eightCounter=1, nineCounter=1, oneCounter=1,twoCounter=1,threeCounter=1,fourCounter=1,fiveCounter=1,sixCounter=1;
		
		var one =new Array();
		var seven =new Array();
		var eight =new Array();
		var nine = new Array();				
        $('#number_seven_save').click(function (){
        	$('#number_seven_page_save').css('display','block');
			var temp = {};
			$('#number_seven_popup').find('input').each(function(index, element) {
                
				name = $(element).attr('name');
				value = $(element).val();
				
				temp[name] = seven[index]= value;
				$(element).val('');
            });
			json.seven[sevenCounter-1] = temp;
			var append = '<tr> <th><a href="#" onclick="{deleteRow(this,7);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></th>    <th> <a href="#number_seven_edit_popup" id="edit-seven" onClick="{editSeven(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a></th>   <td>'+ sevenCounter++ +'</td>                                     <td>'+seven[0] +'</td>                                          <td>'+seven[1] +'</td>                                          <td>'+seven[2] +'</td>                                      </tr>'
			$('#number-sevene-table tbody').append(append);
		});

		$('#number_eight_save').click(function (){
			$('#number_eight_page_save').css('display','block');
			var temp = {};
			$('#number_eight_popup').find('input').each(function(index, element) {
                
				name = $(element).attr('name');
				value = $(element).val();
				
				temp[name] = eight[index]= value;
				$(element).val('');
            });
			json.eight[eightCounter-1] = temp;
			var append = '<tr> <th><a href="#" onclick="{deleteRow(this,8);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></th>    <th> <a href="#number_eight_edit_popup" id="edit-eight" onClick="{editEight(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a></th>                                        <td>'+ eightCounter++ +'</td>                                         <td>'+eight[0] +'</td>                                          <td>'+eight[1] +'</td>                                          <td>'+eight[2] +'</td>   <td>'+eight[3] +'</td>                                    </tr>'
			$('#number-eight-table tbody').append(append);
		});

		$('#number_nine_save').click(function (){
			$('#number_nine_page_save').css('display','block');
			var temp = {};
			$('#number_nine_popup').find('input').each(function(index, element) {
                
				name = $(element).attr('name');
				value = $(element).val();
				
				temp[name] = nine[index]= value;
				$(element).val('');
            });
			json.nine[nineCounter-1] = temp;
			var append = '<tr><th><a href="#" onclick="{deleteRow(this,9);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></th>    <th> <a href="#number_nine_edit_popup" id="edit-nine" onClick="{editNine(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a></th>                                        <td>'+ nineCounter++ +'</td>                                         <td>'+nine[0] +'</td>                                          <td>'+nine[1] +'</td>                                          <td>'+nine[2] +'</td>   <td>'+nine[3] +'</td> <td>'+nine[4] +'</td>                                   </tr>'
			$('#number-nine-table tbody').append(append);
		});
		$('#number_ten_save').click(function (){
			var name = null;
			var value = null;
			$('#material').find('input').each(function(index, element) {
                name = $(element).attr('name');
				value = $(element).val();
				if(value)
				json.ten[name] = value;
				$(element).val('');
            });
		});
		$('#number_one_save').click(function (){
			var name = null, value = null;
			
			var temp = {};
			$('#number_one_page_save').css('display','block');
			$('#number_one_popup').find('input').each(function(index, element) {
                
				name = $(element).attr('name');
				value = $(element).val();
				
				
				temp[name] = one[index] = value;
				$(element).val('');
				
            });
			json.one[oneCounter-1]= temp;
			var append = '<tr>  <th><a href="#" onclick="{deleteRow(this,1);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a></th>    <th> <a href="#number_one_edit_popup" id="edit-one" onClick="{editOne(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a></th>                                  <td>'+ oneCounter++ +'</td>                                         <td>'+one[0] +'</td>                                          <td>'+one[1] +'</td>                                          <td>'+one[2] +'</td>   <td>'+one[3] +'</td> <td>'+one[4] +'</td>  <td>'+one[5] +'</td>                                  </tr>'
			$('#number-one-table tbody').append(append);
		});
		$('#number_two_save').click(function (){
			$('#number_two_page_save').css('display','block');
		  var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_two_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_two_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.two[twoCounter-1] = temp;
		  var append = '<tr> <th> <a href="#" onclick="{  deleteRow(this,2);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>'+
		     ' </th> <th><a href="#number_two_edit_popup" id="edit-seven" onClick="{editTwo(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_seven_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a> </th>'+
		     '<td>' +twoCounter++ +' </td> '
		     +'<td> ' +valueArray[0] +'</td> '
		     +' <td> ' +valueArray[1] +' </td> ' +
		     '<td> ' +valueArray[2] +' </td> '+
		     '<td> ' +valueArray[3] +'  </td> '
		     +'<td>' +valueArray[4] +' </td> <td>' +valueArray[5] +' </td> <td>' +valueArray[6] +' </td> <td>' +valueArray[7] +' </td> <td>' +valueArray[8] +' </td>  </tr>';
		  $('#number-two-table tbody').append(append);
		});
		
		$('#number_three_save').click(function (){
			$('#number_two_page_save').css('display','block');
				var valueArray = new Array();
				var selectElement = null;
				var myindex = 0;
				var name = null;
				var temp = {}
				$('#number_three_popup').find('select').each(function(index, element) {
				  selectElement  = element;
				  myindex = index;
				  name = $(element).attr('name');
				  if($(selectElement).attr('multiple'))
				  { $(element).siblings('span').each(function(index, element) {
					if(index == 0)
					{ 
				  temp[name] = valueArray [myindex] =$(element).children('span span').text();}
					}); 
				  }
				  else{
				 $(element).find('option').each(function(index, element) {
				  if($(element).is(':selected'))
				  { temp[name] = valueArray [myindex] = $(element).val();} 
				  
				 }); 
				  }
					 });
			$('#number_three_popup').find('input').each(function(index, element) {
							name = $(element).attr('name');
				temp[name] = valueArray [myindex+1+index] = $(element).val();
					
						 });
			   json.three[threeCounter-1] = temp;
				var append = '<tr> <th> <a href="#" onclick="{  deleteRow(this,3);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>'+
				   ' </th> <th><a href="#number_three_edit_popup" id="edit-three" onClick="{editThree(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a> </th>'+
				   '<td>' +threeCounter++ +' </td> '
				   +'<td> ' +valueArray[0] +'</td> '
				   +' <td> ' +valueArray[1] +' </td> ' +
				   '<td> ' +valueArray[2] +' </td> '+
				   '<td> ' +valueArray[3] +'  </td> '
				   +'<td>' +valueArray[4] +' </td> <td>' +valueArray[5] +' </td> <td>' +valueArray[6] +' </td> <td>' +valueArray[7] +' </td> <td>' +valueArray[8] +' </td>  </tr>';
				$('#number-three-table tbody').append(append);
  		});
		$('#number_four_save').click(function (){
			$('#number_four_page_save').css('display','block');
			var valueArray = new Array();
			var selectElement = null;
			var myindex = 0;
			var name = null;
			var temp = {}
			$('#number_four_popup').find('select').each(function(index, element) {
			  selectElement  = element;
			  myindex = index;
			  name = $(element).attr('name');
			  if($(selectElement).attr('multiple'))
			  { $(element).siblings('span').each(function(index, element) {
				if(index == 0)
				{ 
			  temp[name] = valueArray [myindex] =$(element).children('span span').text();}
				}); 
			  }
			  else{
			 $(element).find('option').each(function(index, element) {
			  if($(element).is(':selected'))
			  { temp[name] = valueArray [myindex] = $(element).val();} 
			  
			 }); 
			  }
				 });
		$('#number_four_popup').find('input').each(function(index, element) {
						name = $(element).attr('name');
			temp[name] = valueArray [myindex+1+index] = $(element).val();
				
					 });
		   json.four[fourCounter-1] = temp;
			var append = '<tr> <th> <a href="#" onclick="{  deleteRow(this,4);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>'+
			   ' </th> <th><a href="#number_four_edit_popup" id="edit-four" onClick="{editFour(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a> </th>'+
			   '<td>' +fourCounter++ +' </td> '
			   +'<td> ' +valueArray[0] +'</td> '
			   +' <td> ' +valueArray[1] +' </td> ' +
			   '<td> ' +valueArray[2] +' </td> '+
			   '<td> ' +valueArray[3] +'  </td> '
			   +'<td>' +valueArray[4] +' </td> <td>' +valueArray[5] +' </td> <td>' +valueArray[6] +' </td> <td>' +valueArray[7] +' </td> <td>' +valueArray[8] +' </td>  </tr>';
			$('#number-four-table tbody').append(append);
  	});
	
	$('#number_five_save').click(function (){
		$('#number_five_page_save').css('display','block');
			var valueArray = new Array();
			var selectElement = null;
			var myindex = 0;
			var name = null;
			var temp = {}
			$('#number_five_popup').find('select').each(function(index, element) {
			  selectElement  = element;
			  myindex = index;
			  name = $(element).attr('name');
			  if($(selectElement).attr('multiple'))
			  { $(element).siblings('span').each(function(index, element) {
				if(index == 0)
				{ 
			  temp[name] = valueArray [myindex] =$(element).children('span span').text();}
				}); 
			  }
			  else{
			 $(element).find('option').each(function(index, element) {
			  if($(element).is(':selected'))
			  { temp[name] = valueArray [myindex] = $(element).val();} 
			  
			 }); 
			  }
				 });
		
		$('#number_five_popup').find('input').each(function(index, element) {
						name = $(element).attr('name');
			temp[name] = valueArray [myindex+1+index] = $(element).val();
				
					 });
		   json.five[fiveCounter-1] = temp;
			var append = '<tr> <th> <a href="#" onclick="{  deleteRow(this,5);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>'+
			   ' </th> <th><a href="#number_five_edit_popup" id="edit-five" onClick="{editFive(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a> </th>'+
			   '<td>' +fiveCounter++ +' </td> '
			   +'<td> ' +valueArray[0] +'</td> '
			   +' <td> ' +valueArray[1] +' </td> ' +
			   '<td> ' +valueArray[2] +' </td> '+
			   '<td> ' +valueArray[3] +'  </td> '
			   +'<td>' +valueArray[4] +' </td> <td>' +valueArray[5] +' </td> <td>' +valueArray[6] +' </td> <td>' +valueArray[7] +' </td> <td>' +valueArray[8] +' </td>  </tr>';
			$('#number-five-table tbody').append(append);
  });
  
  $('#number_six_save').click(function (){
  	$('#number_six_page_save').css('display','block');
		var valueArray = new Array();
		var selectElement = null;
		var myindex = 0;
		var name = null;
		var temp = {}
		$('#number_six_popup').find('select').each(function(index, element) {
		  selectElement  = element;
		  myindex = index;
		  name = $(element).attr('name');
		  if($(selectElement).attr('multiple'))
		  { $(element).siblings('span').each(function(index, element) {
			if(index == 0)
			{ 
		  temp[name] = valueArray [myindex] =$(element).children('span span').text();}
			}); 
		  }
		  else{
		 $(element).find('option').each(function(index, element) {
		  if($(element).is(':selected'))
		  { temp[name] = valueArray [myindex] = $(element).val();} 
		  
		 }); 
		  }
			 });
		$('#number_six_popup').find('input').each(function(index, element) {
						name = $(element).attr('name');
			temp[name] = valueArray [myindex+1+index] = $(element).val();
				
					 });
		   json.six[sixCounter-1] = temp;
			var append = '<tr> <th> <a href="#" onclick="{  deleteRow(this,6);}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="delete" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Delete</span><span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>'+
			   ' </th> <th><a href="#number_six_edit_popup" id="edit-six" onClick="{editSix(this)}" style="float:left;" data-role="button" data-inline="true" data-position-to="window" data-transition="pop" data-rel="popup" data-icon="edit" data-iconpos="left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" aria-haspopup="true" aria-owns="#number_four_popup" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-icon-left ui-btn-up-a"><span class="ui-btn-inner"><span class="ui-btn-text">Edit</span><span class="ui-icon ui-icon-edit ui-icon-shadow">&nbsp;</span></span></a> </th>'+
			   '<td>' +sixCounter++ +' </td> '
			   +'<td> ' +valueArray[0] +'</td> '
			   +' <td> ' +valueArray[1] +' </td> ' +
			   '<td> ' +valueArray[2] +' </td> '+
			   '<td> ' +valueArray[3] +'  </td> '
			   +'<td>' +valueArray[4] +' </td> <td>' +valueArray[5] +' </td> <td>' +valueArray[6] +' </td> <td>' +valueArray[7] +' </td> <td>' +valueArray[8] +' </td>  </tr>';
			$('#number-six-table tbody').append(append);
  });

///// Header Save Script /////
	$('#header-save').click(function (){
		var name = null;
		var value = null;
		
		$('#header_mark').find('input').each(function(index, element) {
            name = $(element).attr('name');
			value = $(element).val();
			type = $(element).attr('type');
			
			if(value)
			{		
				if(type == "checkbox")
				{
					if($(element).is(':checked'))
					{ json.header[name] = value; }
				}
				else
				{
					json.header[name] = value;
				}
			}
        });
		
	});	
	///// Edit 7 /////////
	$('#edit-seven').click(editSeven);
	
	$('#edit_save_seven').click(function (){
		var valueArray = new Array();
		var temp ={};
		var name =null;
		var value = null;
		$('#number_seven_edit_popup').find('input').each(function(index, element) {            
			name =$(element).attr('name');
			value = $(element).val();			
			temp[name]= valueArray[index] = value;
        });
		json.seven[valueArray[0]-1]=temp;
		$(editSevenReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
        });
		
    });

    $('#edit-one').click(editOne);
	
	$('#edit_save_one').click(function (){
		
		var valueArray = new Array();
		var temp ={};
		var name =null;
		var value = null;
		
		$('#number_one_edit_popup').find('input').each(function(index, element) {
            name =$(element).attr('name');
			value = $(element).val();
			
			temp[name]= valueArray[index] = value;
        });
		json.one[valueArray[0]-1]=temp;
		$(editOneReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
        });
		
    });
	
	$('#edit_two_save').click(function (){
		var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_two_edit_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex+1] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex+1] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_two_edit_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				if(index == 0)
				{ valueArray [0] = $(element).val();}
				else				
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.two[valueArray[0]-1] = temp;
		  $(editTwoReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
          });
	});
	$('#edit_three_save').click(function (){
		var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_three_edit_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex+1] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex+1] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_three_edit_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				if(index == 0)
				{ valueArray [0] = $(element).val();}
				else				
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.three[valueArray[0]-1] = temp;
		  $(editThreeReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
          });
	});
	$('#edit_four_save').click(function (){
		var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_four_edit_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex+1] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex+1] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_four_edit_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				if(index == 0)
				{ valueArray [0] = $(element).val();}
				else				
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.four[valueArray[0]-1] = temp;
		  $(editFourReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
          });
	});
	$('#edit_five_save').click(function (){
		var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_five_edit_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex+1] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex+1] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_five_edit_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				if(index == 0)
				{ valueArray [0] = $(element).val();}
				else				
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.four[valueArray[0]-1] = temp;
		  $(editFiveReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
          });
	});
	$('#edit_six_save').click(function (){
		var valueArray = new Array();
		  var selectElement = null;
		  var myindex = 0;
		  var name = null;
		  var temp = {}
		  $('#number_six_edit_popup').find('select').each(function(index, element) {
			   selectElement  = element;
			   myindex = index;
			   name = $(element).attr('name');
			   if($(selectElement).attr('multiple'))
			   { $(element).siblings('span').each(function(index, element) {
			     if(index == 0)
			     { 
				 	temp[name] = valueArray [myindex+1] =$(element).children('span span').text();}
			     }); 
			   }
			   else{
					$(element).find('option').each(function(index, element) {
					 if($(element).is(':selected'))
					 { temp[name] = valueArray [myindex+1] = $(element).val();} 
					 
					}); 
			   }
       	 });
		  $('#number_six_edit_popup').find('input').each(function(index, element) {
                name = $(element).attr('name');
				if(index == 0)
				{ valueArray [0] = $(element).val();}
				else				
				temp[name] = valueArray [myindex+1+index] = $(element).val();
     			
             });
			json.four[valueArray[0]-1] = temp;
		  $(editSixReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
          });
	});
	
     $('#edit-eight').click(editOne);
	
	$('#edit_save_eight').click(function (){
		
		var valueArray = new Array();
		var temp ={};
		var name =null;
		var value = null;
		$('#number_eight_edit_popup').find('input').each(function(index, element) {
             name =$(element).attr('name');
			value = $(element).val();			
			temp[name]= valueArray[index] = value;
        });
		json.eight[valueArray[0]-1]=temp;
		$(editEightReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
        });
		
    });

     $('#edit-nine').click(editNine);
	
	$('#edit_save_nine').click(function (){
		
		var valueArray = new Array();
		var temp ={};
		var name =null;
		var value = null;
		$('#number_nine_edit_popup').find('input').each(function(index, element) {
            name =$(element).attr('name');
			value = $(element).val();			
			temp[name]= valueArray[index] = value;
        });
		json.nine[valueArray[0]-1]=temp;
		$(editNineReference).parent('th').siblings('td').each(function(index, element) {
            $(element).text(valueArray[index]);
        });
		
    });
});


function editSeven(el){
		var valueArray = new Array();
		editSevenReference = el;
		$(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()
			
			
        });
		$('#number_seven_edit_popup').find('input').each(function(index, element) {
            $(element).val(valueArray[index]);
        });
			
	}

function editOne(el){
	var valueArray = new Array();
	editOneReference = el;
	$(el).parent('th').siblings('td').each(function(index, element) {
        valueArray[index] = $(element).text()
		
		
    });
	$('#number_one_edit_popup').find('input').each(function(index, element) {
        $(element).val(valueArray[index]);
    });
		
	}

function editTwo(el){
	var valueArray = new Array();
	var myindex = 1;
	editTwoReference = el;
		$(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()			
        });
		$('#number_two_edit_popup').find('input').each(function(index, element) {
        	if(index == 0)
			$(element).val(valueArray[0]);
			else
			{$(element).val(valueArray[5+index]);}    
        });
		
		$('#number_two_edit_popup').find('select').each(function(index, element) {
			myindex = index;
            $(element).children('option').each(function(index, element) {
				
                if($(element).val() == valueArray[myindex+1])
				{$(element).prop('selected',true);}
				else
				{$(element).prop('selected',false);}
            });
        });
}

function editEight(el){
	var valueArray = new Array();
	editEightReference = el;
	$(el).parent('th').siblings('td').each(function(index, element) {
        valueArray[index] = $(element).text()
		
		
    });
	$('#number_eight_edit_popup').find('input').each(function(index, element) {
        $(element).val(valueArray[index]);
    });
		
	}

function editNine(el){
	var valueArray = new Array();
	editNineReference = el;
	$(el).parent('th').siblings('td').each(function(index, element) {
        valueArray[index] = $(element).text()
		
		
    });
	$('#number_nine_edit_popup').find('input').each(function(index, element) {
        $(element).val(valueArray[index]);
    });
			
	}

	function editThree(el){
 var valueArray = new Array();
 var myindex = 1;
 editThreeReference = el;
  $(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()   
        });
  $('#number_three_edit_popup').find('input').each(function(index, element) {
         if(index == 0)
   $(element).val(valueArray[0]);
   else
   {$(element).val(valueArray[5+index]);}    
        });
  
  $('#number_three_edit_popup').find('select').each(function(index, element) {
   myindex = index;
            $(element).children('option').each(function(index, element) {
    
                if($(element).val() == valueArray[myindex+1])
    {$(element).prop('selected',true);}
    else
    {$(element).prop('selected',false);}
            });
        });
}
function editFour(el){
 var valueArray = new Array();
 var myindex = 1;
 editFourReference = el;
  $(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()   
        });
  $('#number_four_edit_popup').find('input').each(function(index, element) {
         if(index == 0)
   $(element).val(valueArray[0]);
   else
   {$(element).val(valueArray[5+index]);}    
        });
  
  $('#number_four_edit_popup').find('select').each(function(index, element) {
   myindex = index;
            $(element).children('option').each(function(index, element) {
    
                if($(element).val() == valueArray[myindex+1])
    {$(element).prop('selected',true);}
    else
    {$(element).prop('selected',false);}
            });
        });
}

function editFive(el){
 var valueArray = new Array();
 var myindex = 1;
 editFiveReference = el;
  $(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()   
        });
  $('#number_five_edit_popup').find('input').each(function(index, element) {
         if(index == 0)
   $(element).val(valueArray[0]);
   else
   {$(element).val(valueArray[5+index]);}    
        });
  
  $('#number_five_edit_popup').find('select').each(function(index, element) {
   myindex = index;
            $(element).children('option').each(function(index, element) {
    
                if($(element).val() == valueArray[myindex+1])
    {$(element).prop('selected',true);}
    else
    {$(element).prop('selected',false);}
            });
        });
}

function editSix(el){
 var valueArray = new Array();
 var myindex = 1;
 editSixReference = el;
  $(el).parent('th').siblings('td').each(function(index, element) {
            valueArray[index] = $(element).text()   
        });
  $('#number_six_edit_popup').find('input').each(function(index, element) {
         if(index == 0)
   $(element).val(valueArray[0]);
   else
   {$(element).val(valueArray[5+index]);}    
        });
  
  $('#number_six_edit_popup').find('select').each(function(index, element) {
   myindex = index;
            $(element).children('option').each(function(index, element) {
    
                if($(element).val() == valueArray[myindex+1])
    {$(element).prop('selected',true);}
    else
    {$(element).prop('selected',false);}
            });
        });
}
function deleteRow(el,head){
 
 var number = null;
 switch(head)
 {
 	case 1:
		number = "one"; 
	break;
	case 2:
		number = "two"; 
	break;
	case 3:
		number = "three"; 
	break;
	case 4:
		number = "four"; 
	break;
	case 5:
		number = "five"; 
	break;
	case 6:
		number = "six"; 
	break;
	case 7:
		number = "seven"; 
	break;
	case 8:
		number = "eight"; 
	break;
	case 9:
		number = "nine"; 
	break;
	
 }
 json[number][$($(el).parent('th').siblings('td')[0]).text()-1] = null;
 var tr = $(el).parent('th').parent('tr');
 
 $(tr).html('');
}

