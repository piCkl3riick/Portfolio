$(document).ready(function() {
    function updateSum() {
      var total = 0;
      $(".sumIT:checked").each(function(i, n) {total += parseInt($(n).val());});
      $("#totalIT").val(total);
    }
    // run the update on every checkbox change and on startup
    $("input.sumIT").change(updateSum);
    updateSum();
});

$(document).ready(function() {
    function updateSum() {
      var total = 0;
      $(".sumBUS:checked").each(function(i, n) {total += parseInt($(n).val());});
      $("#totalBus").val(total);
    }
    // run the update on every checkbox change and on startup
    $("input.sumBUS").change(updateSum);
    updateSum();
});

$(document).ready(function() {
    function updateSum() {
      var total = 0;
      $(".sumECD:checked").each(function(i, n) {total += parseInt($(n).val());});
      $("#totalEcd").val(total);
    }
    // run the update on every checkbox change and on startup
    $("input.sumECD").change(updateSum);
    updateSum();
});

