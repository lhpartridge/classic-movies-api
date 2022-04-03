const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))
 
//copy-paste url from web api
fetch('https://api.sampleapis.com/movies/classic/')
    .then(res => res.json())
    .then(data => {
        count = data.length
    })
 
//all classic movies
//localhost:3001/movies/classic
//copy/paste URL from api.sampleapis.com
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/movies/classic/'
 
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/movies', {
                title: 'All Movies',
                name: 'Classic Movie List',
                body: 'all',
                data
            })
        })
})
 
//single-cartoon
//localhost:3001/movies/:id
router.get('/:id', (req, res) => {
    const id = req.params.id
    //change statement to match current api
    const URL = `https://api.sampleapis.com/movies/classic/${id}`
 
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                //change statements to match current api
                res.render('pages/single-movie', {
                    title: `${data.title}`,
                    name: `${data.title}`,
                    body: 'single',
                    data
                })
            } else {
                res.render('pages/404', {
                    title: '404 Error - Page not found',
                    name: '404 Error',
                    body: 'Error'
                })
            }
        })
        .catch(error => {
            console.log('ERROR', error)
        })
})
 

//change section to match current api
//by creator
//localhost:3001/cartoon/creator
// router.get('/creator/:creator', (req, res) => {
//     const creator = req.params.creator
//     const URL = 'https://api.sampleapis.com/cartoons/cartoons2D'
 
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             for (let i = 0; i < data.creator.length; i++) {
//                 if(creator == data.creator[i]) {
//                     res.render('pages/cartoons', {
//                         title: creator,
//                         name: creator,
//                         data
//                     })
//                 }
//             }
//         })
// })
 
 
//by genre
 
module.exports = router