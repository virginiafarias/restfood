package br.com.restfood.service.impl;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import br.com.restfood.model.Produto;
import br.com.restfood.repository.GenericRepository;
import br.com.restfood.service.ProdutoService;

@Named
public class ProdutoServiceImpl implements ProdutoService {

	@Inject
	private GenericRepository<Produto> produtoRepository;
	
	@Override
	public List<Produto> getAll() {
		return produtoRepository.find(Produto.class);
	}

}
