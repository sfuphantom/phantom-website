let array = [0, 0, 0];

$( "#team_btn" ).click(() => { is_expanded(0, 'team') });
$( "#competition_btn" ).click(() => { is_expanded(1, 'competition') });
$( "#opportunity_btn" ).click(() => { is_expanded(2, 'opportunity') });

function is_expanded(array_position, array_name) {
    array[array_position] = (array[array_position] === 0) ? 1 : 0;
    if (array[array_position] == 1) 
        expand(array_name);
    else 
        shrink(array_name);
} // is_expanded : if expanded, shrink, vice versa. 

function expand( section ) {
    $(`#${section}_row`).addClass("expanded_row");
    $(`#${section}_btn`).addClass(`${section}_expanded_btn`);
    $(`#${section}_photo`).addClass(`${section}_expanded_photo`).removeClass(`${section}_expand_photo`);
    $(`#${section}_expand`).addClass("display_none");
    $(`#${section}_expanded`).removeClass("display_none");
    $(`#${section}_link_a`).removeClass("expand_link_a").addClass("expanded_link_a");
} // expand styles

function shrink( section ) {
    $(`#${section}_row`).removeClass("expanded_row");
    $(`#${section}_btn`).removeClass(`${section}_expanded_btn`);
    $(`#${section}_photo`).removeClass(`${section}_expanded_photo`).addClass(`${section}_expand_photo`);
    $(`#${section}_expand`).removeClass("display_none");
    $(`#${section}_expanded`).addClass("display_none");
    $(`#${section}_link_a`).removeClass("expanded_link_a").addClass("expand_link_a");
} // shrink styles