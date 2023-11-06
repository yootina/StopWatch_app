from django.shortcuts import render, redirect
from .models import Article, Comment
from .forms import ArticleForm, CommentForm
# Create your views here.

def index(request):
    articles = Article.objects.all()

    context = {
        'articles': articles,
    }
    return render(request, 'index.html', context)


def detail(request, id):
    article = Article.objects.get(id=id)
    form = CommentForm()

    context = {
        'article': article,
        'form': form,
    }

    return render(request, 'detail.html', context)

def create(request):

    if request.method == 'POST':
        form = ArticleForm(request.POST)

        if form.is_valid():
            article = form.save()
            return redirect('articles:detail', id=article.id)


    else:
        form = ArticleForm()

    context = {
        'form': form,
    }

    return render(request, 'form.html', context)



def comment_create(request, article_id):
    form = CommentForm(request.POST)

    if request.method == 'POST':
        if form.is_valid():
            comment = form.save(commit=False)
            comment.article_id = article_id
            comment.save()
            return redirect('articles:detail', article_id)
        

def comment_delete(request, article_id, cid):
    comment = Comment.objects.get(id=cid)
    comment.delete()

    return redirect('articles:detail', id=article_id)