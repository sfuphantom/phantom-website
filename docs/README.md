# Astellarius Design
Last Updated: 2019-09-18

## Work

### General Problems
    update competition website

### Mobile
    Done!

### In Progress
    Improve Structure of Website
    Consistent Comments, spacing. 

## Notes

### Structure of Website

navbar
    logo
    mobile toggle 
    links > a 

main
    hero
        title
            typer
        scrolldownbtn

    section #team .container
        #team_row .row .expander_row
            absolute #team_btn .expands_btn .team_expands_btn
            col-half
                img #team_photo .team_expand_photo
            col-half #team_col .expander_col
                #team_expand .expander_h1
                #team_expanded .display_none
                    h1 .expanded_h1 

    sponsors 
    contact 

backtotopbtn

### Naming Scheme 
div_somePurpose_elementName
something-something is bootstrap

### Compiling sass
sass --watch styles/index.scss syles/index.css

### fontAwesome 
Font awesome has been doing some weird account bound links, 
not going to change the current link until I absolutely need to. 
It's just too complicated and I dont want to deal with that right now. 

### Need to Study
- Link Integrity / Crossorigin