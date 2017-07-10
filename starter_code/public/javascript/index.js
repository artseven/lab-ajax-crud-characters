const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    event.preventDefault();
    const characterInfo = {
      name: $('#the-name-input').val(),
      occupation: $('#the-occupation-input').val(),
      weapon: $('#the-weapon-input').val()
    };

    $.ajax({
      method: 'GET',
      url: 'https://ih-api.herokuapp.com/characters',
      data: characterInfo,
      success: showFeedback,
      error: handleError
    });
  });
});

  $('#fetch-one').on('click', (e) => {

  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
