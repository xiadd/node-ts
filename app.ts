import * as Koa from 'koa'

const app = new Koa()

app.use(ctx => {
  ctx.body = 'xiadd'
})

app.listen(8002, () => {
  console.log('server is running')
})