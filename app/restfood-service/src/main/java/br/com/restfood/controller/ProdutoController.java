package br.com.restfood.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.restfood.model.Produto;
import br.com.restfood.service.ProdutoService;

@RestController("/")
public class ProdutoController {
	
	@Inject
	private ProdutoService produtoService;
	
	@CrossOrigin
	@RequestMapping(value = "")
	public @ResponseBody List<Produto> getAll() {
		return produtoService.getAll();
	}

}
