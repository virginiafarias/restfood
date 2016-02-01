package br.com.restfood.repository;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;

import br.com.restfood.model.QueryType;

public interface GenericRepository<T> {

	public void setEntityManager(EntityManager em);

	public void save(T entity);
	
	public void update(T entity);

	public void delete(T entity);

	public T find(Class<T> entityClass, Object id);

	public List<T> find(Class<T> entityClass);

	public List<T> find(Class<T> entityClass, int firstResult, int maxResults);

	@SuppressWarnings("rawtypes")
	public List find(String queryName, Map<String, Object> namedParams);

	@SuppressWarnings("rawtypes")
	public List find(QueryType type, String query, Map<String, Object> namedParams);

	@SuppressWarnings("rawtypes")
	public List find(String queryName, Map<String, Object> namedParams, int firstResult, int maxResults);

	@SuppressWarnings("rawtypes")
	public List find(QueryType type, String query, Map<String, Object> namedParams, int firstResult, int maxResults);

	public Object findFirst(String queryName, Map<String, Object> namedParams);

	public Object findFirst(QueryType type, String query, Map<String, Object> namedParams);

	public int executeUpdate(String sql, Map<String, Object> namedParams);

}