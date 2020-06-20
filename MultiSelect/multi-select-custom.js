
$(function() {

  $('#family_des_dropdown_id')
    .multiselect({
      allSelectedText: 'Select All',
      maxHeight: 200,
      includeSelectAllOption: true
    })
    .multiselect('selectAll', false)
    .multiselect('updateButtonText')

    $('.multiselect-container').append('<button id= "family_des_filter" class="btn-save btn btn-primary btn-sm">Save</button>');

    $('#family_des_filter').on('click', function () {
        alert("clicked");
    })

});

