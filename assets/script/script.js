$(document).click(function(){
  $(".custom-dropdown-menu").hide();

});
$(window).on('load', function() {
  setTimeout(function(){
    $('.preloader').fadeOut('slow');
    $('body').removeClass('loading');
  },2000);
});
$(document).ready(function () {
     /**
      * Trip Type Details
      */
      $(".oneway, .roundtrip, .multicity").click(function(){
        $(".trip-types .badge").removeClass('active');
        $(".trip-types .badge").addClass('deactive');
        $(".trip-types .badge").children('i').removeClass(['fa-solid', 'fa-check']);

        $(this).removeClass('deactive');
        $(this).addClass('active');
        $(this).children('i').addClass(['fa-solid', 'fa-check', 'circle']);
        $('#trip-types').val($(this).data('type'));
        $("#add-another-location").hide();
        $(".return-date-box").show();
        if($("#trip-types").val()=="oneway"){
          $(".return-date-box").addClass('return-date');
          $("#moreLocations").hide();
        } else if($("#trip-types").val()=="roundtrip"){
          $(".return-date-box").removeClass('return-date');
          $("#moreLocations").hide();
        } else if($("#trip-types").val()=="multicity"){
          $(".return-date-box").hide();
          $("#add-another-location").show();
          $("#moreLocations").show();
        }
      });
    /**
     * Location Dropdown Handler
     */
    $(".flight-form").on('click','#from,#to,#others, #passengers',function(e){
      e.stopPropagation();
      $('.custom-dropdown-menu').hide();
      $(this).closest('.input-box').find('.custom-dropdown-menu').show();
    });
    
    //Flights Form Traveler Counter
    $(".travelers .actionButtons span.plus").click(function(){
      let number = $(this).closest('.actionButtons').find('.number').text();
      number++;
      $(this).closest('.actionButtons').find('.number').text(number);
    });
    $(".travelers .actionButtons span.minus").click(function(){
      let number = $(this).closest('.actionButtons').find('.number').text();
      if(number>0){
        number--;
        $(this).closest('.actionButtons').find('.number').text(number);
      }
    });
    $(".travelers .adult-actionButtons span.minus").click(function(){
      let number = $(this).closest('.adult-actionButtons').find('.number').text();
      if(number>1){
        number--;
        $(this).closest('.adult-actionButtons').find('.number').text(number);
      }
    });
    $(".travelers .adult-actionButtons span.plus").click(function(){
      let number = $(this).closest('.adult-actionButtons').find('.number').text();
      number++;
      $(this).closest('.adult-actionButtons').find('.number').text(number);
    });

    //Cars Form Passengers Counter
    $(".passengers .actionButtons span.plus").click(function(){
      let pnumber = $(this).closest('.actionButtons').find('.number').text();
      pnumber++;
      $(this).closest('.actionButtons').find('.number').text(pnumber);
    });
    $(".passengers .actionButtons span.minus").click(function(){
      let pnumber = $(this).closest('.actionButtons').find('.number').text();
      if(pnumber>0){
        pnumber--;
        $(this).closest('.actionButtons').find('.number').text(pnumber);
      }
    });
    $(".passengers .adult-actionButtons span.minus").click(function(){
      let pnumber = $(this).closest('.adult-actionButtons').find('.number').text();
      if(pnumber>1){
        pnumber--;
        $(this).closest('.adult-actionButtons').find('.number').text(pnumber);
      }
    });
    $(".passengers .adult-actionButtons span.plus").click(function(){
      let pnumber = $(this).closest('.adult-actionButtons').find('.number').text();
      pnumber++;
      $(this).closest('.adult-actionButtons').find('.number').text(pnumber);
    });

    //Form Field Dropdown
    $(".f-search-form-1").on("click",".custom-dropdown-menu",function(e){
      e.stopPropagation();
    });
    $(".close-dropdown-btn").click(function(e){
      $(this).closest('.custom-dropdown-menu').toggle();
    });
    $(".f-search-form-1").on("click",".custom-dropdown-menu ul.close li",function(){
      var element = $(this).closest(".input-box");
      element.find('input').val($(this).find('.country').text().trim());
      element.find('.airport-name').text($(this).find('.airportname').text().trim());
      $('.custom-dropdown-menu').slideUp();
    });

    //Flight Travelers Field Text Change
    var flightclass = 'Economy';
    var flighttype = 'Nonstop';
    var adults = '1 Adult';
    var infants = '0 Infants';
    var children = '0 Children';
    $(".custom-dropdown-menu.others span").click(function(){
      var element = $(this).closest(".input-box");
      var parent = $(this).parent().attr("class").split(' ').pop();
      
      switch (parent) {
        case 'flightClass':
          flightclass = $(this).text().trim();
          if (flighttype == '') {
            element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass);
          }
          else{
            element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass+', '+flighttype);
          }
          break;
        case 'flightType':
          if ($(this).attr("data-val")=="yes") {
            flighttype = 'Nonstop';
            element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass+', '+flighttype);
          }
          else{
            flighttype = '';
            element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass);
          }
          break;
        case 'adult-actionButtons':        
          if ($(this).attr("class") != 'number') {
            adults = $(this).siblings(".number").text().trim();
            adults = adults+" Adults";
            if (flighttype == '') {
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass);
            }
            else{
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass+', '+flighttype);
            }
          }
          break;
        case 'actionButtons':
          var itsparent = $(this).closest("."+parent).parent().attr("class").split(' ').pop();
          if ("."+itsparent == ".child-traveler" && $(this).attr("class") != 'number') {
            children = $(this).siblings(".number").text().trim();
            children = children+" Children";
            if (flighttype == '') {
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass);
            }
            else{
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass+', '+flighttype);
            }
          }
          else if ("."+itsparent == ".infant-traveler" && $(this).attr("class") != 'number') {
            infants = $(this).siblings(".number").text().trim();
            infants = infants+" Infants";
            if (flighttype == '') {
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass);
            }
            else{
              element.find('.airport-name').text(adults+', '+infants+', '+children+', '+flightclass+', '+flighttype);
            }
          }
          break;
        default:
          break;
      }

      $(".custom-dropdown-menu.others input[name='flightTravelers']").val(adults+', '+infants+', '+children);
    });

    //Car Passengers Field Text Change
    var adults = '1 Adult';
    var luggage = '0 Luggage';
    var children = '0 Children';
    $(".custom-dropdown-menu.passengers span").click(function(){
      var element = $(this).closest(".input-box");
      var parent = $(this).parent().attr("class").split(' ').pop();
      
      switch (parent) {
        case 'adult-actionButtons':        
          if ($(this).attr("class") != 'number') {
            adults = $(this).siblings(".number").text().trim();
            adults = adults+" Adults";
            element.find('.airport-name').text(adults+', '+children+', '+luggage);
          }
          break;
        case 'actionButtons':
          var itsparent = $(this).closest("."+parent).parent().attr("class").split(' ').pop();
          if ("."+itsparent == ".child-passengers" && $(this).attr("class") != 'number') {
            children = $(this).siblings(".number").text().trim();
            children = children+" Children";
            element.find('.airport-name').text(adults+', '+children+', '+luggage);
          }
          else if ("."+itsparent == ".passengers-luggage" && $(this).attr("class") != 'number') {
            luggage = $(this).siblings(".number").text().trim();
            luggage = luggage+" Luggage";
            element.find('.airport-name').text(adults+', '+children+', '+luggage);
          }
          break;
        default:
          break;
      }
      $(".custom-dropdown-menu.passengers input[name='carPassengers']").val(adults+', '+children+', '+luggage);
    });

////
    //Select Trip Type
    $(".return-date-box").change(function(){
      if($("#trip-types").val()=="oneway"){
        $(".roundtrip").trigger('click');
      }
    });
    $(".flightClass .badge").click(function(){
      $(".flightClass span").removeClass('bg-primary-color');
      var val = $(this).data('class');
      $(this).addClass('bg-primary-color');
      $("#class").val(val);
    });
    $(".flightType .badge").click(function(){
      $(".flightType span").removeClass('bg-primary-color');
      var val = $(this).data('val');
      $(this).addClass('bg-primary-color');
      $("#flightType").val(val);
    });

    $("#options a").click(function(){
      $("#options a").removeClass('active');
      $(this).addClass('active');
      var card = $(this).data('card');
      $("#searchform .main-content-card .form").hide();
      $("#"+card).show();
    });

    //Hotel Listing's View Details Toggle
    $(".accordian-btn").click(function () {
      var hotel = $(this).closest(".hotel-box");
      var room = hotel.find(".hotel-rooms");
      $('.hotel-box').find('.hotel-rooms').slideUp();
      room.toggle();
    });


    //Toggle Price Comparision Card
    $("#price-comparison-btn").click(function(){
      $(this).siblings('.card-body').slideToggle('slow',function(){
        if($(this).is(':hidden')) { 
          $("#price-comparison-btn").find('i').removeClass('fa-chevron-up');
          $("#price-comparison-btn").find('i').addClass('fa-chevron-down');
        }
        else {
          $("#price-comparison-btn").find('i').removeClass('fa-chevron-down');
          $("#price-comparison-btn").find('i').addClass('fa-chevron-up');
        }
      });
    });

    // Display Fare Card
    $(".fare-btn").click(function(){
      $(this).closest('.icon-btns').siblings('.hidden-content').find('.flight-details-card').slideUp();
      $(this).closest('.icon-btns').siblings('.hidden-content').find('.fare-card').slideToggle();
    });
    // Display Flight Details Card
    $(".flight-details-btn").click(function(){
      $(this).closest('.icon-btns').siblings('.hidden-content').find('.fare-card').slideUp();
      $(this).closest('.icon-btns').siblings('.hidden-content').find('.flight-details-card').slideToggle();
    });
    // Display or Hide Tabs based on the Flight Nav Menu'
    
    //Display Sidebar
    $(".sidebar-toggler-btn,.sidebar-toggler-btn").click(function(){
      $("#sidebar").slideToggle();
    });

    //Flights Listing Form Toggle
    $(".flights-form-toggler").click(function(){
      $("#flight-search-row .f-search-form-1").slideToggle();
    });

    //Clear Flights Filter
    $("#flights-filter-form #clear-filters-btn").click(function(){
      $("#flights-filter-form").trigger("reset");
      $("#flights-filter-form").find("#price_range").val("0;15000");
      $("#flights-filter-form .flat-slider .slider .ui-slider-range").css({"left":"0%", "width":"30%"});
      $("#flights-filter-form .flat-slider").find(".ui-slider-handle:eq(0)").css("left", "0%");
      $("#flights-filter-form .flat-slider").find(".ui-slider-handle:eq(1)").css("left", "30%");
      $("#flights-filter-form .flat-slider").find(".min_value").html("0 PKR");
      $("#flights-filter-form .flat-slider").find(".max_value").html("15000 PKR");
    });

    //Add Another Room in Hotels Form
    $(".rooms").on("click","#add-room-btn",function(){
      $(".room-number:first").clone().insertAfter("div.room-number:last");
    
      $(".room-number:last").find(".room-heading").append('<button type="button" class="remove-room">Remove</button>');
      
      renumber_rooms();
      $('.room-number:not(:last)').find('.room-body').slideUp();
      $('.room-number:last').find('.room-body').show();
    });

    //Remove Room Button in Hotels Form Travellers Field
    $(".rooms").on('click','.remove-room',function(){
      $(this).parents(".room-number").remove();
      renumber_rooms();
    });

    //Function to re-number the rooms
    function renumber_rooms() {
      var room_count=1;
      $(".rooms").children(".room-number").each(function(){
        $(this).find(".room-heading h5").text("Room "+room_count);
        $(this).find(".room-heading").attr("id", "room-heading"+room_count);
        $(this).find(".room-body").attr("id", "room-body"+room_count);
        room_count++;
      });
    }

    //Room Number Toggle in Hotels Form
    $(".rooms").on('click','.room-heading',function () {
      var room_number = $(this).closest(".room-number");
      var room_body = room_number.find(".room-body");
      $('.room-number').find('.room-body').slideUp();
      room_body.toggle();
    });

    //Number of Adults Select
    $(".rooms").on('click','.adult-guest li', function(){
      $(this).closest(".adult-guest").find("li").removeClass("active");
      $(this).addClass("active");
      let adult_count = $(this).closest(".adult-guest").find("li.active").text().trim();
      $(this).closest(".adult-guest").find("input[name='adult-count']").val(adult_count);
    });

    //Number of Children Select
    $(".rooms").on('click','.child-guest li', function(){
      $(this).closest(".child-guest").find("li").removeClass("active");
      $(this).addClass("active");
      let child_count = $(this).closest(".child-guest").find("li.active").text().trim();
      $(this).closest(".child-guest").find("input[name='child-count']").val(child_count);

      //Adding dropdown on child select
      var no_of_child = $(this).text();
      var html = '<select class="form-select child-age-select">';
      html += '<option selected>Child 1 age</option>';
      html += '<option value="1">1</option>';
      html += '<option value="2">2</option>';
      html += '<option value="3">3</option>';
      html += '<option value="4">4</option>';
      html += '<option value="5">5</option>';
      html += '<option value="6">6</option>';
      html += '<option value="7">7</option>';
      html += '<option value="8">8</option>';
      html += '<option value="9">9</option>';
      html += '<option value="10">10</option>';
      html += '<option value="11">11</option>';
      html += '<option value="12">12</option>';
      html += '</select>';
     
      switch(no_of_child){
        case '0':
          $(this).parent().next(".child-dropdown").empty();
          break;
        case '1':
          $(this).parent().next(".child-dropdown").empty();
          $(this).parent().next(".child-dropdown").append(html);
          break;
        case '2':
          $(this).parent().next(".child-dropdown").empty();
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          var count = 1;
          var element = $(this).parent().next(".child-dropdown");
          
          element.children().each(function(){
            $(this).attr("id", "age-child"+count);
            $(this).find("option:first").text("Child "+count+" age");
            count++;
          });
          break;
        case '3':
          $(this).parent().next(".child-dropdown").empty();
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          var count = 1;
          $(this).parent().next(".child-dropdown").children().each(function(){
            $(this).attr("id", "age-child"+count);
            $(this).find("option:first").text("Child "+count+" age");
            count++;
          });
          break;
        case '4':
          $(this).parent().next(".child-dropdown").empty();
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          $(this).parent().next(".child-dropdown").append(html);
          var count = 1;
          $(this).parent().next(".child-dropdown").children().each(function(){
            $(this).attr("id", "age-child"+count);
            $(this).find("option:first").text("Child "+count+" age");
            count++;
          });
          break;
        default:
          break;
      }
    });

    //Hotel Traveler Field Text Change
    
    $(".rooms").on('click','#apply-room-btn', function(){
      var room_count = 0;
      var guest_count = 0;
      room_count = $(".rooms .room-number").length;
      $(".rooms .room-number").each(function(){
        guest_count += parseInt($(this).find(".adult-guest li.active").text().trim());
        guest_count += parseInt($(this).find(".child-guest li.active").text().trim());
      })
      $(this).closest(".input-box").find(".airport-name").text(room_count+" Rooms, "+guest_count+" Guests");
      $(".rooms input[name='room_count']").val(room_count);
      $(".rooms input[name='guest_count']").val(guest_count);
      $(".custom-dropdown-menu.rooms").slideUp();
    });

    //Add Another Location in Flights Form
    const max_extra_locations=4;  
    let current_locations=0;
    
    $("button#add-another-location").click(function(){
      if(current_locations<max_extra_locations){
        $("div#moreLocations").append('<div class="d-flex my-2 another-location"></div>');
        $(".flight-form-card .from-input-box:first").clone().appendTo("div#moreLocations .another-location:last");
        $(".flight-form-card div.swap-locations:first").clone().appendTo("div#moreLocations .another-location:last");
        $(".flight-form-card .to-input-box:first").clone().appendTo("div#moreLocations .another-location:last");
        $(".flight-form-card .departure-date-box:first").clone().appendTo("div#moreLocations .another-location:last");

        var $this = $('div#moreLocations');
          if ($this.find('div.another-location').length > 1) {
              $this.find(".another-location:last").append('<button type="button" class="remove-location"><i class="fa-solid fa-xmark"></i></button>');
          }
          current_locations++;
          if(current_locations==4){
            $("button#add-another-location").hide();
          }
        }
    });

    //Remove Location Button in Multicity Flights Form
    $("#moreLocations").on('click','.remove-location',function(){
      $(this).parents(".another-location").remove();
      current_locations--;
          if(current_locations<4){
            $("button#add-another-location").show();
          }
    });

    //Toggle Car Booking Fields
    $(".car-booking .billing-address-fields").hide();
    $(".car-booking #billing-address").click(function(){
      $(".car-booking .billing-address-fields").slideToggle();
    });

    $(".car-booking .business-traveler-fields").hide();
    $(".car-booking #business-traveler").click(function(){
      $(".car-booking .business-traveler-fields").slideToggle();
    });

    //Insurance Card Select
    $(".insurance-booking .insurance-card").click(function(){
      $(".insurance-card").removeClass("active");
      $(this).addClass("active");
      $(".insurance-booking input[name='insurance-package']").val($(this).find(".card-title h5").text().trim());
    });

    /************************
     *  FORMS JOSN *
     ************************/

    //Flights Form JSON
    $("#searchform #flights button[type='submit']").click(function(){
      var flights_data = {};
      flights_data.trip_type = $("#searchform input[name='trip-types']").val();
      
      var flights_form = $("#searchform #flights");
      var locations = [];
      let first_location = {};
      first_location.from = flights_form.find(".from-input-box:first input[name='from']").val();
      first_location.to = flights_form.find(".to-input-box:first input[name='to']").val();
      first_location.departure_date = flights_form.find(".departure-date-box:first input[name='departureDate']").val();
      locations.push(first_location);
      
      if (flights_form.find("div#moreLocations .another-location").length >= 1) {
        flights_form.find("div#moreLocations .another-location").each(function(){
          let another_location = {};
          another_location.from = $(this).find(".from-input-box input[name='from']").val();
          another_location.to = $(this).find(".to-input-box input[name='to']").val();
          another_location.departure = $(this).find(".departure-date-box input[name='departureDate']").val();
          locations.push(another_location);
        });
      }
      flights_data.locations = locations;
      flights_data.return_date = flights_form.find(".return-date-box:first input[name='returnDate']").val();
      flights_data.flight_class = flights_form.find(".custom-dropdown-menu.others input[name='class']").val();
      flights_data.nonstop_flight = flights_form.find(".custom-dropdown-menu.others input[name='flightType']").val();
      flights_data.travelers = flights_form.find(".custom-dropdown-menu.others input[name='flightTravelers']").val();

      let json = JSON.stringify(flights_data);
      flights_form.find("input[name='json']").val(json);
    });

    //Hotels Form JSON
    $("#searchform #hotels button[type='submit']").click(function(){
      var hotels_form = $("#searchform #hotels");
      var hotels_data = {};
      hotels_data.location = hotels_form.find("input[name='from']").val();
      hotels_data.checkin_date = hotels_form.find("input[name='checkInDate']").val();
      hotels_data.checkout_date = hotels_form.find("input[name='checkoutDate']").val();
      hotels_data.room_count = hotels_form.find(".custom-dropdown-menu.rooms input[name='room_count']").val();
      hotels_data.guest_count = hotels_form.find(".custom-dropdown-menu.rooms input[name='guest_count']").val();
      var rooms = [];
      hotels_form.find(".custom-dropdown-menu.rooms .room-number").each(function(){
        let room = {};
        room.adult_count = $(this).find(".adult-guest input[name='adult-count']").val();
        room.child_count = $(this).find(".child-guest input[name='child-count']").val();
        var children = [];
        if (room.child_count > 0) {
          $(this).find(".child-dropdown .child-age-select").each(function(){
            let child = {};
            child.age = $(this).find("option:selected").text();
            children.push(child);
          });
          room.children = children;
        }
        rooms.push(room);
      });

      hotels_data.rooms = rooms;
      let json = JSON.stringify(hotels_data);
      hotels_form.find("input[name='json']").val(json);
    });

    //Cars Form JSON
    $("#searchform #cars button[type='submit']").click(function(){
      var cars_form = $("#searchform #cars");
      var cars_data = {};
      cars_data.pickup_location = cars_form.find("input[name='from']").val();
      cars_data.dropoff_location = cars_form.find("input[name='to']").val();
      cars_data.pickup_date = cars_form.find("input[name='pickupDate']").val();
      cars_data.pickup_time = cars_form.find("input[name='pickupTime']").val();
      cars_data.passengers = cars_form.find(".custom-dropdown-menu.passengers input[name='carPassengers']").val();

      let json = JSON.stringify(cars_data);
      cars_form.find("input[name='json']").val(json);
    });

    //Insurance Form JSON
    $("#searchform #insurance button[type='submit']").click(function(){
      var insurance_form = $("#searchform #insurance");
      var insurance_data = {};
      insurance_data.coverage_type = insurance_form.find(".insurance-type input[name='from']").val();
      insurance_data.travel_type = insurance_form.find(".insurance-type input[name='to']").val();
      insurance_data.origin = insurance_form.find(".origin-destination input[name='from']").val();
      insurance_data.destination = insurance_form.find(".origin-destination input[name='to']").val();
      insurance_data.dob = insurance_form.find("input[name='DOB']").val();
      insurance_data.start_date = insurance_form.find("input[name='start-date']").val();
      insurance_data.end_date = insurance_form.find("input[name='end-date']").val();

      let json = JSON.stringify(insurance_data);
      insurance_form.find("input[name='json']").val(json);
    });
});