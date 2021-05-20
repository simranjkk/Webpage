$(document).on("click",".answer-comment",function(){
 var answerid= $(this).attr("data-answerid");
 var questionid= $(this).attr("data-questionid");
 var div = $("#answer_"+answerid)

       $.ajax({
        type:'GET',
        data:{"answerid":answerid},
        url:'/question/comments/'+answerid+'/',
        success:
        function(response){
            div.append(response); 
            },
        error: function(data){
            console.error("error occured while getting comments for answer with id",answerid);
        },
    });
$(this).removeClass('answer-comment');
});
/*
$('#answer_form').on('submit',function(event){
    console.log("In the JS??");
    event.preventDefault();
    var questionid= $(this).attr("data-questionid");
    $.ajax({
        type:'POST',
        data:$(this).serialize(),
        url:$(this).attr('action'),
        success:
        function(response){
            var div = $('#answer-list');
            div.append(response);
            location.reload();
            },
        error: function(data){
            console.error("error occured while submitting answer for question id",questionid);
        },
    });
    
});
*/
