const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $btnComplete = $('<button class="complete"></button>').text('Complete');

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$('li.item').append($btnComplete);
$('.item-remove').click(removeTask);
$('.complete').click(completeTask);

$($add).click(function(e) {
  e.preventDefault();
  const $li = $('<li class="item"></li>');
  const $span = $('<span class="text"></span>').text($($input).val());
  const $btnRemove = $('<button class="remove"></button> ').text('Remove');
  const $btnComplete = $('<button class="complete"></button>').text('Complete');
  $($btnRemove).click(removeTask);
  $($btnComplete).click(completeTask);
  $($li).append($span, $btnRemove);
  $($list).prepend($li);
  $($input).val('');
});

function removeTask() {
  const $this = this;
  $($this).parent().hide();
}
function completeTask() {
  $($(this).parent()[0].firstElementChild).toggleClass('done');
}
// $('.item-search').click(function() {
//   const $input = $('.search').val();
//   $('.search').text(`${$(`.item-text:contains(${$inputText})`).length}`);
// });
$('.item-search').click(function () {
  const $inputText = $('.search').val();
  if ($inputText === '') {
    $('.result').text('Enter text');
  } else if ($(`.item-text:contains(${$inputText})`).length) {
    $('.result').text(`Found ${$(`.item-text:contains(${$inputText})`).length} matches.`);
  } else {
    $('.result').text(`Don't have any matches.`);
  }
});