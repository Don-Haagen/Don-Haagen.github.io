$( document ).ready(function() {
    var tradeOffSliders = ['scope-slider', 'budget-slider', 'time-slider', 'quality-slider']; 

    tradeOffSliders.forEach(setUpSliders); 

    function setUpSliders(item, index) 
    { 
        $( '#' + item + '-value' ).html( index + 1 );
        
        $('#' + item).slider({
                value: index + 1,
                min: 1,
                max: 4,
                step: 1,
                change: function( event, ui ) {
                        var currentId = this.id;
                    var previousNumber = parseInt($('#' + currentId + '-value').text(), 10);                    
                    $('.slide-value').each(function(index, obj) {
                        var id = obj.id;
                    var val = $('#' + id).slider('value');
                    if (id != currentId && val == ui.value) {
                        $('#' + id).slider('value', previousNumber);
                        return false;
                    }
                    });
                    $( '#' + currentId + '-value' ).html( ui.value );
                }
            });
    }
});