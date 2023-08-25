$(function () {
    const currentDate = dayjs().format ('dddd, MMMM D, h:mm a');
    $('#currentDay').text(currentDate);

    $('.saveBtn').on('click', function () {
        var userDesc = $(this).siblings('.description').val();
        var hourEl = $(this).parent().attr('id');
        
        localStorage.setItem(hourEl, userDesc);
    })
});

var currentHour = dayjs().format('H');
console.log(currentHour);

$('.time-block').each(function () {
    const blockHour = parseInt($(this).attr('id').split('-')[1]);

    if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
    } else if (blockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
    } else {
        $(this).removeClass('past present').addClass('future');
    }

    const savedDesc = localStorage.getItem($(this).attr('id'));
    $(this).find('.description').val(savedDesc);
});
